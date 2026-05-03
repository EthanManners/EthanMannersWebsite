<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	let { scrollProgress = 0 }: { scrollProgress?: number } = $props();
</script>

<div class="hero-canvas">
	<Canvas>
		<Scene {scrollProgress} />
	</Canvas>
</div>

<style>
	.hero-canvas {
		position: absolute;
		inset: 0;
		z-index: 0;
	}
</style>
