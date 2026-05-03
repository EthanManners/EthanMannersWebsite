<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { createParticleSystem, updateParticles } from './particles';
	import { onMount } from 'svelte';
	import type { ShaderMaterial } from 'three';

	let { scrollProgress = 0 }: { scrollProgress?: number } = $props();

	const { mesh, material } = createParticleSystem();

	let startTime = 0;

	onMount(() => {
		startTime = performance.now() / 1000;
	});

	useTask((delta) => {
		const elapsed = performance.now() / 1000 - startTime;
		const scrollFactor = 1.0 - scrollProgress * 0.6;
		updateParticles(material as ShaderMaterial, elapsed, scrollFactor);
	});

	// Camera Z position: dolly in on scroll
	let cameraZ = $derived(10 - scrollProgress * 2);
</script>

<T.PerspectiveCamera
	makeDefault
	position.x={0}
	position.y={0}
	position.z={cameraZ}
	fov={50}
/>

<T is={mesh} />
