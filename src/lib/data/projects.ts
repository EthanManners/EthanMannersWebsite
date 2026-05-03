export type ProjectStatus = 'building' | 'shipping' | 'archived';

export interface Project {
	slug: string;
	title: string;
	description: string;
	status: ProjectStatus;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		slug: 'irlos',
		title: 'Irlos',
		description: 'Open-source streaming server stack. C++ daemon, Rust TUI, GPL.',
		status: 'building',
		featured: true
	},
	{
		slug: 'databasemart',
		title: 'DatabaseMart streaming infra',
		description: 'Production IRL streaming server, 16 months uptime, paying clients.',
		status: 'shipping'
	},
	{
		slug: 'backpack-rig',
		title: 'Backpack streamer rig',
		description: 'Orange Pi 5 Plus + belabox hardware build. Already streaming live.',
		status: 'shipping'
	},
	{
		slug: 'swankysmp',
		title: 'SwankySMP',
		description: 'Customized Minecraft SMP with original plugins. Two seasons.',
		status: 'archived'
	},
	{
		slug: '150m-views',
		title: '150M views',
		description: 'Selected work from 11 years of editing.',
		status: 'archived'
	}
];
