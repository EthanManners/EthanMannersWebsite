<footer class="footer">
	<div class="footer-inner">
		<span class="footer-text">Ethan Manners</span>
		<div class="footer-links">
			<a href="https://github.com/EthanManners" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
			<a href="https://x.com/" target="_blank" rel="noopener noreferrer" class="footer-link">X</a>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--border);
		margin-top: var(--space-16);
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-4) var(--space-3);
	}

	.footer-text {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		color: var(--fg-subtle);
	}

	.footer-links {
		display: flex;
		gap: var(--space-3);
	}

	.footer-link {
		font-size: var(--text-xs);
		line-height: var(--leading-xs);
		letter-spacing: var(--tracking-xs);
		text-transform: uppercase;
		color: var(--fg-subtle);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease);
	}

	.footer-link:hover {
		color: var(--fg-muted);
	}
</style>
