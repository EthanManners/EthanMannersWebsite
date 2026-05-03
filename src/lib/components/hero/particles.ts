import {
	InstancedBufferGeometry,
	InstancedBufferAttribute,
	PlaneGeometry,
	ShaderMaterial,
	Mesh,
	AdditiveBlending,
	type Scene,
	type Camera
} from 'three';

const PARTICLE_COUNT = 2500;
const FIELD_WIDTH = 16;
const FIELD_HEIGHT = 6;
const FIELD_DEPTH = 4;
const RETRANSMIT_CHANCE = 0.03;

const VERT = /* glsl */ `
	attribute vec3 aOffset;
	attribute float aSpeed;
	attribute float aPhase;
	attribute float aIsRetransmit;

	uniform float uTime;
	uniform float uScrollFactor;

	varying float vAlpha;
	varying float vRetransmit;

	// Simplex-ish noise for turbulence
	vec3 hash(vec3 p) {
		p = vec3(
			dot(p, vec3(127.1, 311.7, 74.7)),
			dot(p, vec3(269.5, 183.3, 246.1)),
			dot(p, vec3(113.5, 271.9, 124.6))
		);
		return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
	}

	float noise(vec3 p) {
		vec3 i = floor(p);
		vec3 f = fract(p);
		vec3 u = f * f * (3.0 - 2.0 * f);

		return mix(
			mix(
				mix(dot(hash(i + vec3(0,0,0)), f - vec3(0,0,0)),
					dot(hash(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
				mix(dot(hash(i + vec3(0,1,0)), f - vec3(0,1,0)),
					dot(hash(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
			mix(
				mix(dot(hash(i + vec3(0,0,1)), f - vec3(0,0,1)),
					dot(hash(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
				mix(dot(hash(i + vec3(0,1,1)), f - vec3(0,1,1)),
					dot(hash(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y),
			u.z
		);
	}

	void main() {
		float speed = aSpeed * (0.3 + 0.7 * uScrollFactor);
		float t = fract(aPhase + uTime * speed * 0.04);

		// Base position: flow left to right
		float x = mix(-${(FIELD_WIDTH / 2).toFixed(1)}, ${(FIELD_WIDTH / 2).toFixed(1)}, t);
		float y = aOffset.y;
		float z = aOffset.z;

		// Curl noise turbulence
		float turbTime = uTime * 0.15;
		float nx = noise(vec3(x * 0.3, y * 0.3, turbTime + aPhase)) * 1.2;
		float ny = noise(vec3(x * 0.3 + 100.0, y * 0.3, turbTime + aPhase)) * 0.8;
		float nz = noise(vec3(x * 0.3, y * 0.3 + 100.0, turbTime + aPhase)) * 0.6;

		vec3 pos = vec3(x + nx, y + ny, z + nz);

		// Fade in at source, fade out at sink
		float edgeFade = smoothstep(0.0, 0.08, t) * smoothstep(1.0, 0.88, t);

		// Lost packet effect: some particles briefly vanish and reappear
		float dropPhase = fract(aPhase * 17.3 + uTime * 0.3);
		float isDropping = step(0.97, dropPhase) * aIsRetransmit;
		float dropFade = 1.0 - isDropping;

		vAlpha = edgeFade * dropFade * (0.4 + 0.6 * aIsRetransmit);
		vRetransmit = aIsRetransmit;

		// Scale particle
		float size = mix(0.02, 0.045, aSpeed) * (1.0 + 0.3 * aIsRetransmit);

		vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
		gl_Position = projectionMatrix * (mvPosition + vec4(position.xy * size, 0.0, 0.0));
	}
`;

const FRAG = /* glsl */ `
	varying float vAlpha;
	varying float vRetransmit;

	uniform vec3 uColorBase;
	uniform vec3 uColorAccent;

	void main() {
		// Soft circle
		vec2 center = gl_PointCoord - 0.5;
		float dist = length(center);
		if (dist > 0.5) discard;

		float soft = 1.0 - smoothstep(0.2, 0.5, dist);
		vec3 color = mix(uColorBase, uColorAccent, vRetransmit);

		gl_FragColor = vec4(color, vAlpha * soft);
	}
`;

export function createParticleSystem() {
	// Base geometry: a tiny quad (billboard via vertex shader)
	const baseGeo = new PlaneGeometry(1, 1);
	const geo = new InstancedBufferGeometry();
	geo.index = baseGeo.index;
	geo.attributes.position = baseGeo.attributes.position;
	geo.attributes.uv = baseGeo.attributes.uv;

	// Instance attributes
	const offsets = new Float32Array(PARTICLE_COUNT * 3);
	const speeds = new Float32Array(PARTICLE_COUNT);
	const phases = new Float32Array(PARTICLE_COUNT);
	const retransmits = new Float32Array(PARTICLE_COUNT);

	for (let i = 0; i < PARTICLE_COUNT; i++) {
		offsets[i * 3] = 0; // x is computed in shader from phase
		offsets[i * 3 + 1] = (Math.random() - 0.5) * FIELD_HEIGHT;
		offsets[i * 3 + 2] = (Math.random() - 0.5) * FIELD_DEPTH;

		speeds[i] = 0.4 + Math.random() * 0.6;
		phases[i] = Math.random();
		retransmits[i] = Math.random() < RETRANSMIT_CHANCE ? 1.0 : 0.0;
	}

	geo.setAttribute('aOffset', new InstancedBufferAttribute(offsets, 3));
	geo.setAttribute('aSpeed', new InstancedBufferAttribute(speeds, 1));
	geo.setAttribute('aPhase', new InstancedBufferAttribute(phases, 1));
	geo.setAttribute('aIsRetransmit', new InstancedBufferAttribute(retransmits, 1));
	geo.instanceCount = PARTICLE_COUNT;

	const material = new ShaderMaterial({
		vertexShader: VERT,
		fragmentShader: FRAG,
		uniforms: {
			uTime: { value: 0 },
			uScrollFactor: { value: 1 },
			uColorBase: { value: { x: 0.91, y: 0.91, z: 0.93 } }, // --fg: #e8e8ed
			uColorAccent: { value: { x: 1.0, y: 0.357, z: 0.122 } } // --accent: #ff5b1f
		},
		transparent: true,
		blending: AdditiveBlending,
		depthWrite: false
	});

	const mesh = new Mesh(geo, material);
	mesh.frustumCulled = false;

	return { mesh, material };
}

export function updateParticles(
	material: ShaderMaterial,
	time: number,
	scrollFactor: number
) {
	material.uniforms.uTime.value = time;
	material.uniforms.uScrollFactor.value = scrollFactor;
}
