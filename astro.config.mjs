import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://david-nossebro.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
});
