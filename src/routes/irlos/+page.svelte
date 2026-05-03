<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const products = [
		{
			name: 'Server Box',
			price: '$399–699',
			desc: 'Pre-configured irlosd server. Plug in, point your encoder at it, go live.',
		},
		{
			name: 'Backpack',
			price: '$799–899',
			desc: 'Field-ready streaming rig with bonded cellular uplink and hardware encoding.',
		},
		{
			name: 'Cloud',
			price: '~$30/mo',
			desc: 'Managed irlosd instance. No hardware, no ops. SRT ingest with global relay.',
		},
	];

	const techStack = [
		{ name: 'irlosd', detail: 'C++ daemon — SRT ingest, transcoding, failover, relay' },
		{ name: 'irlos-tui', detail: 'Rust terminal UI — real-time monitoring over Unix socket' },
		{ name: 'libsrt', detail: 'Secure Reliable Transport — the protocol that makes unstable networks usable' },
		{ name: 'sdbus-cpp', detail: 'D-Bus integration for system-level service management' },
		{ name: 'GPL', detail: 'The whole stack. You own the code that runs your stream.' },
	];

	let email = $state('');
	let submitted = $state(false);
	let submitting = $state(false);
	let error = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!email.trim()) return;

		submitting = true;
		error = '';

		try {
			const res = await fetch('TODO', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email })
			});

			if (!res.ok) throw new Error('Failed to submit');
			submitted = true;
		} catch {
			error = 'Something went wrong. Try again.';
		} finally {
			submitting = false;
		}
	}
</script>

<svelte:head>
	<title>Irlos — Ethan Manners</title>
</svelte:head>

<div class="page">
	<!-- ── What it is ── -->
	<section class="section" use:reveal>
		<h1 class="page-title">Irlos</h1>
		<p class="intro">
			The open-source streaming stack purpose-built for IRL streamers. One binary
			replaces the duct-taped pile of SLS + noalbs + OBS + obs-websocket that every
			IRL streamer runs today. SRT ingest, transcoding, failover, and relay — in a
			single daemon that just works.
		</p>
	</section>

	<!-- ── Product line ── -->
	<section class="section" use:reveal>
		<h2 class="section-title">The product</h2>
		<div class="product-grid">
			{#each products as product}
				<div class="product-card">
					<span class="product-name">{product.name}</span>
					<span class="product-price">{product.price}</span>
					<p class="product-desc">{product.desc}</p>
				</div>
			{/each}
		</div>
		<div class="bundle">
			<div class="bundle-inner">
				<div class="bundle-text">
					<span class="bundle-name">Complete Kit</span>
					<p class="bundle-desc">Server Box + Backpack + 3 months Cloud. Everything to go live from anywhere.</p>
				</div>
				<span class="bundle-price">~$1,299</span>
			</div>
		</div>
	</section>

	<!-- ── Why now ── -->
	<section class="section" use:reveal>
		<h2 class="section-title">Why now</h2>
		<p class="body-text">
			IRL streaming is growing faster than the tooling can keep up. Streamers are
			running four separate processes duct-taped together with shell scripts and
			prayers. When something breaks mid-stream — and it does, because cellular
			networks are chaos — there's no single system watching the whole pipeline. Irlos
			closes that gap. One process, one config, one thing to monitor. The stack the
			ecosystem should have had five years ago.
		</p>
	</section>

	<!-- ── Tech ── -->
	<section class="section" use:reveal>
		<h2 class="section-title">The stack</h2>
		<div class="tech-list">
			{#each techStack as item}
				<div class="tech-row">
					<span class="tech-name">{item.name}</span>
					<span class="tech-detail">{item.detail}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- ── Waitlist ── -->
	<section class="section waitlist-section" use:reveal>
		<h2 class="section-title">Get notified</h2>

		{#if submitted}
			<p class="waitlist-confirm">You're on the list. I'll reach out when it's ready.</p>
		{:else}
			<p class="body-text waitlist-desc">
				Irlos is in active development. Drop your email and I'll let you know when
				the first builds ship.
			</p>
			<form class="waitlist-form" onsubmit={handleSubmit} aria-label="Join the Irlos waitlist">
				<input
					type="email"
					bind:value={email}
					placeholder="you@email.com"
					required
					class="waitlist-input"
				/>
				<button type="submit" class="waitlist-btn" disabled={submitting}>
					{submitting ? 'Joining...' : 'Join waitlist'}
				</button>
			</form>
			{#if error}
				<p class="waitlist-error">{error}</p>
			{/if}
		{/if}
	</section>
</div>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: var(--space-8) var(--space-3) var(--space-16);
	}

	.section {
		margin-bottom: var(--space-12);
	}

	.page-title {
		font-size: var(--text-xl);
		font-weight: 600;
		line-height: var(--leading-xl);
		letter-spacing: var(--tracking-xl);
		color: var(--fg);
		margin-bottom: var(--space-3);
	}

	.section-title {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		font-weight: 500;
		color: var(--fg);
		margin-bottom: var(--space-4);
	}

	.intro {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		color: var(--fg-muted);
	}

	.body-text {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		color: var(--fg-muted);
	}

	/* ── Product grid ── */
	.product-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-3);
	}

	@media (max-width: 640px) {
		.product-grid {
			grid-template-columns: 1fr;
		}
	}

	.product-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding: var(--space-4);
		background: var(--bg-elev);
		border: 1px solid var(--border);
		border-radius: 12px;
	}

	.product-name {
		font-size: var(--text-base);
		font-weight: 500;
		color: var(--fg);
	}

	.product-price {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		font-weight: 600;
		color: var(--fg);
	}

	.product-desc {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		color: var(--fg-muted);
		margin-top: var(--space-1);
	}

	/* ── Bundle ── */
	.bundle {
		margin-top: var(--space-3);
		padding: var(--space-4);
		background: var(--bg-elev);
		border: 1px solid var(--accent);
		border-radius: 12px;
	}

	.bundle-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
	}

	.bundle-name {
		font-size: var(--text-base);
		font-weight: 500;
		color: var(--accent);
	}

	.bundle-desc {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		color: var(--fg-muted);
		margin-top: var(--space-1);
	}

	.bundle-price {
		font-size: var(--text-lg);
		line-height: var(--leading-lg);
		letter-spacing: var(--tracking-lg);
		font-weight: 600;
		color: var(--fg);
		white-space: nowrap;
	}

	/* ── Tech ── */
	.tech-list {
		display: flex;
		flex-direction: column;
	}

	.tech-row {
		display: flex;
		gap: var(--space-3);
		padding: var(--space-2) 0;
		border-bottom: 1px solid var(--border);
	}

	.tech-row:last-child {
		border-bottom: none;
	}

	.tech-name {
		font-size: var(--text-base);
		font-weight: 500;
		color: var(--fg);
		min-width: 120px;
		flex-shrink: 0;
	}

	.tech-detail {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		color: var(--fg-muted);
	}

	/* ── Waitlist ── */
	.waitlist-section {
		margin-bottom: 0;
	}

	.waitlist-desc {
		margin-bottom: var(--space-4);
	}

	.waitlist-form {
		display: flex;
		gap: var(--space-2);
	}

	@media (max-width: 480px) {
		.waitlist-form {
			flex-direction: column;
		}
	}

	.waitlist-input {
		flex: 1;
		padding: var(--space-1) var(--space-2);
		background: var(--bg-elev);
		border: 1px solid var(--border);
		border-radius: 8px;
		color: var(--fg);
		font-family: inherit;
		font-size: var(--text-base);
		line-height: var(--leading-base);
		outline: none;
		transition: border-color var(--duration-fast) var(--ease);
	}

	.waitlist-input::placeholder {
		color: var(--fg-subtle);
	}

	.waitlist-input:focus {
		border-color: var(--fg-subtle);
	}

	.waitlist-btn {
		padding: var(--space-1) var(--space-3);
		background: var(--fg);
		color: var(--bg);
		border: none;
		border-radius: 8px;
		font-family: inherit;
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		font-weight: 500;
		cursor: pointer;
		transition:
			opacity var(--duration-fast) var(--ease),
			transform var(--duration-fast) var(--ease);
		white-space: nowrap;
	}

	.waitlist-btn:hover {
		opacity: 0.9;
		transform: translateY(-1px);
	}

	.waitlist-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}

	.waitlist-confirm {
		font-size: var(--text-base);
		line-height: var(--leading-base);
		color: var(--fg);
		padding: var(--space-3) var(--space-4);
		background: var(--bg-elev);
		border: 1px solid var(--border);
		border-radius: 8px;
	}

	.waitlist-error {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		color: var(--accent);
		margin-top: var(--space-1);
	}
</style>
