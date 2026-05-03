<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let { data } = $props();

	const statusColor: Record<string, string> = {
		building: 'var(--accent)',
		shipping: 'var(--fg)',
		archived: 'var(--fg-subtle)'
	};
</script>

<svelte:head>
	<title>{data.project.title} — Ethan Manners</title>
</svelte:head>

<main class="page">
	<header class="page-header" use:reveal>
		<a href="/work" class="back-link">Work</a>
		<div class="title-row">
			<h1 class="page-title">{data.project.title}</h1>
			<span
				class="status-pill"
				style="color: {statusColor[data.project.status]}; border-color: {statusColor[data.project.status]};"
			>
				{data.project.status}
			</span>
		</div>
	</header>

	<article class="prose" use:reveal>
		{@html data.html}
	</article>
</main>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-3) var(--space-16);
	}

	.page-header {
		margin-bottom: var(--space-8);
	}

	.back-link {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		color: var(--fg-subtle);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease);
		display: inline-block;
		margin-bottom: var(--space-3);
	}

	.back-link:hover {
		color: var(--fg-muted);
	}

	.title-row {
		display: flex;
		align-items: center;
		gap: var(--space-3);
	}

	.page-title {
		font-size: var(--text-xl);
		font-weight: 600;
		line-height: var(--leading-xl);
		letter-spacing: var(--tracking-xl);
		color: var(--fg);
	}

	.status-pill {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		padding: 2px 10px;
		border: 1px solid;
		border-radius: 999px;
		white-space: nowrap;
	}

	/* ── Prose styling for rendered markdown ── */
	.prose :global(h1) {
		display: none; /* Title already shown in header */
	}

	.prose :global(h2) {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		font-weight: 500;
		color: var(--fg);
		margin: var(--space-6) 0 var(--space-2);
	}

	.prose :global(h2:first-child),
	.prose :global(h1 + h2) {
		margin-top: 0;
	}

	.prose :global(p) {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		color: var(--fg-muted);
		margin: var(--space-2) 0;
	}

	.prose :global(strong) {
		color: var(--fg);
		font-weight: 500;
	}

	.prose :global(ul),
	.prose :global(ol) {
		color: var(--fg-muted);
		margin: var(--space-2) 0;
		padding-left: var(--space-3);
	}

	.prose :global(li) {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		margin: var(--space-1) 0;
	}

	.prose :global(code) {
		font-size: 0.875em;
		color: var(--fg);
		background: var(--bg-elev);
		padding: 2px 6px;
		border-radius: 4px;
	}

	.prose :global(a) {
		color: var(--fg);
		text-decoration: underline;
		text-underline-offset: 2px;
		transition: color var(--duration-fast) var(--ease);
	}

	.prose :global(a:hover) {
		color: var(--accent);
	}
</style>
