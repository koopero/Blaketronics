// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Blaketronics',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Lessons',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: '' },
						{ label: 'Cycle 1 : Foundations', slug: 'guides/cycle_1' },
					],
				},
			],
		}),
	],
});
