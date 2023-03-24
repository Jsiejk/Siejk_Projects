/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		sveltekit(), 
		// svelte({ hot: !process.env.VITEST })
	], 
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
    	environment: 'jsdom',
	}
});

