import { marked } from 'marked';
import type { PageLoad } from './$types';

const nowRaw = import.meta.glob('/src/content/now.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

export const load: PageLoad = () => {
	const raw = nowRaw['/src/content/now.md'] ?? '';

	// Split on --- to separate entries. First entry is "current", rest are archive.
	const sections = raw.split(/\n---\n/).map((s) => s.trim()).filter(Boolean);

	const current = sections[0] ? (marked.parse(sections[0], { async: false }) as string) : '';
	const archive = sections.slice(1).map((s) => marked.parse(s, { async: false }) as string);

	return { current, archive };
};
