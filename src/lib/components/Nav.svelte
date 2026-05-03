<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/work', label: 'Work' },
		{ href: '/now', label: 'Now' },
		{ href: '/irlos', label: 'Irlos' },
	];
</script>

<nav class="nav" aria-label="Main navigation">
	<div class="nav-inner">
		<a href="/" class="wordmark" class:active={page.url.pathname === '/'}>
			Ethan Manners
		</a>

		<div class="nav-links">
			{#each links as { href, label }}
				<a
					{href}
					class="nav-link"
					class:active={page.url.pathname === href}
				>
					{label}
				</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		background-color: color-mix(in srgb, var(--bg) 80%, transparent);
		border-bottom: 1px solid var(--border);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-2) var(--space-3);
	}

	.wordmark {
		font-size: var(--text-base);
		font-weight: 500;
		color: var(--fg);
		text-decoration: none;
		letter-spacing: -0.01em;
		transition: color var(--duration-fast) var(--ease);
	}

	.wordmark:hover {
		color: var(--fg);
	}

	.nav-links {
		display: flex;
		gap: var(--space-4);
	}

	.nav-link {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		color: var(--fg-muted);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease);
	}

	.nav-link:hover {
		color: var(--fg);
	}

	.nav-link.active {
		color: var(--fg);
	}
</style>
