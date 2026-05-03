<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let { data } = $props();
	let archiveOpen = $state(false);
</script>

<svelte:head>
	<title>Now — Ethan Manners</title>
</svelte:head>

<div class="page">
	<header class="page-header" use:reveal>
		<h1 class="page-title">Now</h1>
		<p class="page-sub">What I'm working on right now. Updated weekly.</p>
	</header>

	<section class="current prose" use:reveal>
		{@html data.current}
	</section>

	{#if data.archive.length > 0}
		<section class="archive" use:reveal>
			<button
				class="archive-toggle"
				onclick={() => archiveOpen = !archiveOpen}
			>
				<span class="archive-label">Previous weeks</span>
				<span class="archive-chevron" class:open={archiveOpen}></span>
			</button>

			{#if archiveOpen}
				<div class="archive-entries">
					{#each data.archive as entry}
						<div class="prose archive-entry">
							{@html entry}
						</div>
					{/each}
				</div>
			{/if}
		</section>
	{/if}

	<footer class="now-footer" use:reveal>
		<p class="now-footer-text">
			Inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" class="now-link">nownownow.com</a>. Edit this page at <code>src/content/now.md</code>.
		</p>
	</footer>
</div>

<style>
	.page {
		max-width: 640px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-3) var(--space-16);
	}

	.page-header {
		margin-bottom: var(--space-8);
	}

	.page-title {
		font-size: var(--text-xl);
		font-weight: 600;
		line-height: var(--leading-xl);
		letter-spacing: var(--tracking-xl);
		color: var(--fg);
	}

	.page-sub {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		color: var(--fg-muted);
		margin-top: var(--space-1);
	}

	/* ── Prose (shared with case study) ── */
	.prose :global(h2) {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		font-weight: 500;
		color: var(--fg);
		margin: 0 0 var(--space-3);
	}

	.prose :global(p) {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		color: var(--fg-muted);
		margin: var(--space-2) 0;
	}

	.prose :global(ul) {
		color: var(--fg-muted);
		margin: var(--space-2) 0;
		padding-left: var(--space-3);
	}

	.prose :global(li) {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		margin: var(--space-1) 0;
	}

	.prose :global(strong) {
		color: var(--fg);
		font-weight: 500;
	}

	/* ── Current entry ── */
	.current {
		padding-bottom: var(--space-8);
		border-bottom: 1px solid var(--border);
	}

	/* ── Archive ── */
	.archive {
		margin-top: var(--space-6);
	}

	.archive-toggle {
		display: flex;
		align-items: center;
		gap: var(--space-1);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.archive-label {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		color: var(--fg-muted);
		transition: color var(--duration-fast) var(--ease);
	}

	.archive-toggle:hover .archive-label {
		color: var(--fg);
	}

	.archive-chevron {
		display: inline-block;
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 5px solid var(--fg-muted);
		transition: transform var(--duration-fast) var(--ease);
	}

	.archive-chevron.open {
		transform: rotate(180deg);
	}

	.archive-entries {
		margin-top: var(--space-4);
	}

	.archive-entry {
		padding: var(--space-4) 0;
		border-bottom: 1px solid var(--border);
	}

	.archive-entry:last-child {
		border-bottom: none;
	}

	/* ── Footer ── */
	.now-footer {
		margin-top: var(--space-8);
	}

	.now-footer-text {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		color: var(--fg-subtle);
	}

	.now-footer-text code {
		font-size: 0.875em;
		color: var(--fg-muted);
		background: var(--bg-elev);
		padding: 2px 6px;
		border-radius: 4px;
	}

	.now-link {
		color: var(--fg-subtle);
		text-decoration: underline;
		text-underline-offset: 2px;
		transition: color var(--duration-fast) var(--ease);
	}

	.now-link:hover {
		color: var(--fg-muted);
	}
</style>
