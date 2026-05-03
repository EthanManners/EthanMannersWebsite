<svelte:head>
	<title>Styleguide — Design Tokens</title>
</svelte:head>

<div class="mx-auto max-w-[960px] px-6 py-16">
	<h1 class="text-xl font-semibold mb-12">Design Tokens</h1>

	<!-- ── Type Scale ── -->
	<section class="mb-16">
		<p class="meta mb-6">Type Scale</p>

		<div class="space-y-8">
			<div>
				<p class="meta mb-2">text-xl / clamp(2.25rem, 5vw, 3.5rem) / -0.02em</p>
				<p class="text-xl font-semibold">Ethan Manners</p>
			</div>

			<div>
				<p class="meta mb-2">text-lg / 1.375rem / -0.01em</p>
				<p class="text-lg">Systems operator. Miami.</p>
			</div>

			<div>
				<p class="meta mb-2">text-base / 1rem / default tracking</p>
				<p class="text-base">I build streaming infrastructure, ship video at scale, and operate the unglamorous parts of the internet.</p>
			</div>

			<div>
				<p class="meta mb-2">text-xs / 0.8125rem / +0.08em / uppercase (meta label)</p>
				<p class="meta">Status: Building</p>
			</div>
		</div>
	</section>

	<!-- ── Colors ── -->
	<section class="mb-16">
		<p class="meta mb-6">Colors</p>

		<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
			{#each colors as { name, var: cssVar, hex }}
				<div>
					<div
						class="h-16 rounded-lg border border-[var(--border)]"
						style="background-color: var({cssVar});"
					></div>
					<p class="text-xs mt-2 text-[var(--fg)]">{name}</p>
					<p class="text-xs text-[var(--fg-muted)]">{hex}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- ── Accent Usage ── -->
	<section class="mb-16">
		<p class="meta mb-6">Accent</p>
		<div class="flex items-center gap-6">
			<span class="text-lg font-medium text-[var(--accent)]">One accent element per viewport</span>
			<span class="inline-block h-3 w-3 rounded-full bg-[var(--accent)]"></span>
		</div>
	</section>

	<!-- ── Spacing ── -->
	<section class="mb-16">
		<p class="meta mb-6">Spacing (8px base grid)</p>

		<div class="space-y-3">
			{#each spacingTokens as { label, value }}
				<div class="flex items-center gap-4">
					<span class="text-xs text-[var(--fg-muted)] w-24 shrink-0">{label}</span>
					<div
						class="h-3 rounded-sm bg-[var(--fg-subtle)]"
						style="width: {value};"
					></div>
					<span class="text-xs text-[var(--fg-muted)]">{value}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- ── Motion ── -->
	<section class="mb-16">
		<p class="meta mb-6">Motion</p>

		<div class="space-y-4">
			<div class="flex items-center gap-6">
				<span class="text-xs text-[var(--fg-muted)] w-32 shrink-0">Hover (200ms)</span>
				<button
					class="h-10 w-32 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] text-xs text-[var(--fg)]
						transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
					style="transition-timing-function: var(--ease); transition-duration: var(--duration-fast);"
				>
					Hover me
				</button>
			</div>

			<div class="flex items-center gap-6">
				<span class="text-xs text-[var(--fg-muted)] w-32 shrink-0">Movement (400ms)</span>
				<div
					class="motion-demo h-10 w-10 rounded-lg bg-[var(--fg-subtle)]"
				></div>
			</div>

			<p class="text-xs text-[var(--fg-muted)]">
				Easing: cubic-bezier(0.32, 0.72, 0, 1) — the Apple curve
			</p>
		</div>
	</section>

	<!-- ── Borders & Surfaces ── -->
	<section class="mb-16">
		<p class="meta mb-6">Surfaces</p>

		<div class="flex gap-4">
			<div class="h-24 w-40 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center">
				<span class="text-xs text-[var(--fg-muted)]">--bg</span>
			</div>
			<div class="h-24 w-40 rounded-lg bg-[var(--bg-elev)] border border-[var(--border)] flex items-center justify-center">
				<span class="text-xs text-[var(--fg-muted)]">--bg-elev</span>
			</div>
		</div>
	</section>
</div>

<style>
	.motion-demo {
		animation: slide 2s var(--ease) infinite alternate;
	}

	@keyframes slide {
		from { transform: translateX(0); }
		to { transform: translateX(120px); }
	}
</style>

<script lang="ts">
	const colors = [
		{ name: '--bg', var: '--bg', hex: '#06070a' },
		{ name: '--bg-elev', var: '--bg-elev', hex: '#0c0e13' },
		{ name: '--fg', var: '--fg', hex: '#e8e8ed' },
		{ name: '--fg-muted', var: '--fg-muted', hex: '#8a8a93' },
		{ name: '--fg-subtle', var: '--fg-subtle', hex: '#4a4a52' },
		{ name: '--accent', var: '--accent', hex: '#ff5b1f' },
		{ name: '--border', var: '--border', hex: '#1a1c22' },
	];

	const spacingTokens = [
		{ label: '--space-1', value: '0.5rem' },
		{ label: '--space-2', value: '1rem' },
		{ label: '--space-3', value: '1.5rem' },
		{ label: '--space-4', value: '2rem' },
		{ label: '--space-6', value: '3rem' },
		{ label: '--space-8', value: '4rem' },
		{ label: '--space-12', value: '6rem' },
		{ label: '--space-16', value: '8rem' },
	];
</script>
