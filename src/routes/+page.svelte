<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { onMount } from 'svelte';

	// Both hero variants are dynamically imported to keep Three.js out of the main bundle
	let HeroComponent: any = $state(null);
	let heroMode: 'webgl' | 'fallback' | null = $state(null);
	let scrollProgress = $state(0);
	let heroEl: HTMLElement | undefined = $state();

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			heroMode = 'fallback';
			import('$lib/components/hero/HeroFallback.svelte').then((m) => {
				HeroComponent = m.default;
			});
		} else {
			heroMode = 'webgl';
			import('$lib/components/hero/HeroScene.svelte').then((m) => {
				HeroComponent = m.default;
			});
		}

		function onScroll() {
			if (!heroEl) return;
			const rect = heroEl.getBoundingClientRect();
			const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
			scrollProgress = progress;
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	const stats = [
		{ value: '$700K+', label: 'Revenue generated across ventures' },
		{ value: '150M+', label: 'Social media views' },
		{ value: '11 yrs', label: 'Video editing' },
		{ value: '16 mo', label: 'Running streaming infra in production' },
	];

	const teasers = [
		{
			href: '/work',
			title: 'Work',
			description: 'Five projects, from open-source streaming servers to Minecraft SMPs.',
		},
		{
			href: '/irlos',
			title: 'Irlos',
			description: 'The open-source streaming stack replacing every IRL streamer\'s duct tape.',
		},
		{
			href: '/now',
			title: 'Now',
			description: 'What I\'m working on this week.',
		},
	];
</script>

<svelte:head>
	<title>Ethan Manners — Systems operator. Miami.</title>
</svelte:head>

<!-- ── Hero ── -->
<section class="hero" bind:this={heroEl}>
	{#if HeroComponent}
		{#if heroMode === 'webgl'}
			<HeroComponent {scrollProgress} />
		{:else}
			<HeroComponent />
		{/if}
	{/if}
	<div class="hero-content">
		<h1 class="hero-headline">Ethan Manners</h1>
		<p class="hero-sub">Systems operator. Miami.</p>
	</div>
</section>

<!-- ── Pitch ── -->
<section class="section" use:reveal>
	<div class="container">
		<p class="pitch">
			I build streaming infrastructure, ship video at scale, and operate the
			unglamorous parts of the internet. Currently writing <strong>Irlos</strong>,
			a C++ daemon that replaces the duct-taped stack every IRL streamer runs
			today. Eleven years of editing. Two years of systems programming. One
			opinion about open source.
		</p>
	</div>
</section>

<!-- ── Stats ── -->
<section class="section" use:reveal>
	<div class="container">
		<div class="stats">
			{#each stats as { value, label }}
				<div class="stat">
					<span class="stat-value">{value}</span>
					<span class="stat-label">{label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ── Teasers ── -->
<section class="section" use:reveal>
	<div class="container">
		<div class="teasers">
			{#each teasers as { href, title, description }}
				<a {href} class="teaser">
					<span class="teaser-title">{title}</span>
					<span class="teaser-desc">{description}</span>
					<span class="teaser-arrow">View</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ── Hero ── */
	.hero {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		min-height: 100svh;
		overflow: hidden;
	}

	.hero-content {
		position: relative;
		text-align: center;
		padding: var(--space-4);
	}

	.hero-headline {
		font-size: var(--text-xl);
		font-weight: 600;
		line-height: var(--leading-xl);
		letter-spacing: var(--tracking-xl);
		color: var(--fg);
		margin: 0;
	}

	.hero-sub {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		color: var(--fg-muted);
		margin: var(--space-2) 0 0;
	}

	/* ── Sections ── */
	.section {
		padding: var(--space-12) 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--space-3);
	}

	/* ── Pitch ── */
	.pitch {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		color: var(--fg-muted);
		max-width: 640px;
	}

	.pitch strong {
		color: var(--fg);
		font-weight: 500;
	}

	/* ── Stats ── */
	.stats {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-4);
	}

	@media (max-width: 640px) {
		.stats {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.stat-value {
		font-size: var(--text-xl);
		font-weight: 600;
		line-height: var(--leading-xl);
		letter-spacing: var(--tracking-xl);
		color: var(--fg);
	}

	.stat-label {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		color: var(--fg-muted);
	}

	/* ── Teasers ── */
	.teasers {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-3);
	}

	@media (max-width: 768px) {
		.teasers {
			grid-template-columns: 1fr;
		}
	}

	.teaser {
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

	.teaser:hover {
		border-color: var(--fg-subtle);
		transform: translateY(-2px);
	}

	.teaser-title {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		font-weight: 500;
		color: var(--fg);
	}

	.teaser-desc {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		color: var(--fg-muted);
	}

	.teaser-arrow {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		color: var(--fg-subtle);
		transition: color var(--duration-fast) var(--ease);
	}

	.teaser:hover .teaser-arrow {
		color: var(--accent);
	}
</style>
