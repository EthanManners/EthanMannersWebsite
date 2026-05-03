import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import { marked } from 'marked';
import type { PageLoad } from './$types';

const markdownFiles = import.meta.glob('/src/content/work/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug);
	if (!project) error(404, 'Project not found');

	const raw = markdownFiles[`/src/content/work/${params.slug}.md`];
	if (!raw) error(404, 'Case study not found');

	const html = marked.parse(raw, { async: false }) as string;

	return {
		project,
		html
	};
};
