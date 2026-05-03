<div class="fallback">
	<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" class="fallback-svg" aria-hidden="true">
		<!-- Static representation of particle stream: source → sink -->
		<!-- Source node -->
		<circle cx="80" cy="150" r="4" fill="#e8e8ed" opacity="0.6" />
		<circle cx="80" cy="150" r="8" fill="none" stroke="#e8e8ed" stroke-width="0.5" opacity="0.3" />

		<!-- Sink node -->
		<circle cx="720" cy="150" r="4" fill="#e8e8ed" opacity="0.6" />
		<circle cx="720" cy="150" r="8" fill="none" stroke="#e8e8ed" stroke-width="0.5" opacity="0.3" />

		<!-- Stream particles (static positions along the path) -->
		{#each streamDots as dot}
			<circle
				cx={dot.x}
				cy={dot.y}
				r={dot.r}
				fill={dot.accent ? '#ff5b1f' : '#e8e8ed'}
				opacity={dot.opacity}
			/>
		{/each}

		<!-- Faint connecting path -->
		<line x1="80" y1="150" x2="720" y2="150" stroke="#e8e8ed" stroke-width="0.3" opacity="0.1" />
	</svg>
</div>

<script lang="ts">
	// Pre-computed static dot positions to represent frozen particle stream
	const streamDots = Array.from({ length: 60 }, (_, i) => {
		const t = i / 59;
		const x = 100 + t * 600;
		const seed = Math.sin(i * 127.1 + 311.7) * 43758.5453;
		const turbY = (Math.sin(seed) * 0.5) * 40;
		const y = 150 + turbY;
		const isAccent = i === 23 || i === 41; // Two retransmit particles
		return {
			x,
			y,
			r: isAccent ? 2.5 : 1.5,
			opacity: isAccent ? 0.8 : 0.2 + Math.abs(Math.sin(seed * 2)) * 0.4,
			accent: isAccent
		};
	});
</script>

<style>
	.fallback {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 0;
	}

	.fallback-svg {
		width: 80%;
		max-width: 800px;
		height: auto;
		opacity: 0.6;
	}
</style>
