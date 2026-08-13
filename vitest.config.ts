// vitest.config.ts
// Vitest configuration for SvelteKit

import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		setupFiles: ['src/test/setup.ts'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: [
				'node_modules/',
				'.svelte-kit/',
				'build/',
				'src/test/',
				'**/*.d.ts',
				'**/*.config.*',
			],
		},
		// SvelteKit specific
		deps: {
			inline: ['@sveltejs/kit'],
		},
	},
});