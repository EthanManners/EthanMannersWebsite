<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { reveal } from '$lib/actions/reveal';

	const statusColor: Record<string, string> = {
		building: 'var(--accent)',
		shipping: 'var(--fg)',
		archived: 'var(--fg-subtle)'
	};
</script>

<svelte:head>
	<title>Work — Ethan Manners</title>
</svelte:head>

<div class="page">
	<header class="page-header" use:reveal>
		<h1 class="page-title">Work</h1>
	</header>

	<div class="grid" use:reveal>
		{#each projects as project, i}
			<a
				href="/work/{project.slug}"
				class="card"
				class:featured={project.featured}
			>
				<div class="card-top">
					<h2 class="card-title">{project.title}</h2>
					<span
						class="status-pill"
						style="color: {statusColor[project.status]}; border-color: {statusColor[project.status]};"
					>
						{project.status}
					</span>
				</div>
				<p class="card-desc">{project.description}</p>
				<span class="card-view">View</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.page {
		max-width: 1200px;
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

	/* ── Asymmetric grid ──
	   12 columns. Featured tile spans 7, second spans 5.
	   Remaining three tiles span 4 each on the second row. */
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--space-3);
	}

	.card {
		grid-column: span 4;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4);
		background: var(--bg-elev);
		border: 1px solid var(--border);
		border-radius: 12px;
		text-decoration: none;
		transition:
			border-color var(--duration-fast) var(--ease),
			transform var(--duration) var(--ease);
	}

	.card:hover {
		border-color: var(--fg-subtle);
		transform: translateY(-2px);
	}

	/* Featured tile: spans 7 columns */
	.card.featured {
		grid-column: span 7;
	}

	/* Second tile: spans 5 columns to fill the row with featured */
	.card:nth-child(2) {
		grid-column: span 5;
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.card,
		.card.featured,
		.card:nth-child(2) {
			grid-column: span 1;
		}
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
	}

	.card-title {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		font-weight: 500;
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
		flex-shrink: 0;
	}

	.card-desc {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		color: var(--fg-muted);
		flex: 1;
	}

	.card-view {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		color: var(--fg-subtle);
		transition: color var(--duration-fast) var(--ease);
	}

	.card:hover .card-view {
		color: var(--accent);
	}
</style>
