<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<Nav />

<div class="page-wrapper">
	{#key page.url.pathname}
		<div class="page-enter">
			{@render children()}
		</div>
	{/key}
</div>

<Footer />

<style>
	.page-wrapper {
		padding-top: 57px; /* nav height */
		min-height: 100vh;
	}

	.page-enter {
		animation: pageIn 300ms cubic-bezier(0.32, 0.72, 0, 1) both;
	}

	@keyframes pageIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
