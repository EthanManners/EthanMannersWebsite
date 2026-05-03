/**
 * Scroll-driven reveal: fade + 16px y-translate, fires once.
 * Usage: <div use:reveal>
 */
export function reveal(node: HTMLElement) {
	node.style.opacity = '0';
	node.style.transform = 'translateY(16px)';
	node.style.transition = `opacity 600ms cubic-bezier(0.32, 0.72, 0, 1), transform 600ms cubic-bezier(0.32, 0.72, 0, 1)`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
				observer.unobserve(node);
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
