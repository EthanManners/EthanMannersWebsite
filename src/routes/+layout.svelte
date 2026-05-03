<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<a href="#main" class="skip-link">Skip to content</a>

<Nav />

<main id="main" class="page-wrapper">
	{#key page.url.pathname}
		<div class="page-enter">
			{@render children()}
		</div>
	{/key}
</main>

<Footer />

<style>
	.skip-link {
		position: absolute;
		top: -100%;
		left: var(--space-3);
		z-index: 200;
		padding: var(--space-1) var(--space-2);
		background: var(--fg);
		color: var(--bg);
		font-size: var(--text-xs);
		border-radius: 4px;
		text-decoration: none;
	}

	.skip-link:focus {
		top: var(--space-1);
	}

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
