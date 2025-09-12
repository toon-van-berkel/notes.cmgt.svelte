import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// output folder for GitHub Pages
			pages: 'build',
			assets: 'build',
			fallback: '404.html' // allows SPA-style routing
		}),
		paths: {
			// IMPORTANT: repo name goes here
			base: dev ? '' : '/notes.cmgt.svelte',
			relative: true // make all links/assets relative
		},
		prerender: {
			entries: ['*'] // export every route
		}
	}
};

export default config;
