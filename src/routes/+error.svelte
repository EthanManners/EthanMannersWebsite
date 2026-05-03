<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — Ethan Manners</title>
</svelte:head>

<main class="error-page">
	<span class="error-code">{page.status}</span>
	<p class="error-message">
		{#if page.status === 404}
			This page doesn't exist.
		{:else}
			Something broke.
		{/if}
	</p>
	<a href="/" class="error-link">Back to home</a>
</main>

<style>
	.error-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 57px);
		gap: var(--space-3);
		padding: var(--space-4);
	}

	.error-code {
		font-size: var(--text-xl);
		font-weight: 600;
		line-height: var(--leading-xl);
		letter-spacing: var(--tracking-xl);
		color: var(--fg);
	}

	.error-message {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		color: var(--fg-muted);
	}

	.error-link {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		color: var(--fg-subtle);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease);
	}

	.error-link:hover {
		color: var(--accent);
	}
</style>
