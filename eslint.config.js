// eslint.config.js
// ESLint configuration with flat config (ESLint 9+)

import js from '@eslint/js';
import pluginSvelte from 'eslint-plugin-svelte';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	js.configs.recommended,
	...pluginSvelte.configs.recommended,
	pluginPrettier,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: './tsconfig.json',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/consistent-type-imports': 'error',
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
			},
		},
		rules: {
			'svelte/no-at-html-tags': 'warn',
			'svelte/valid-compile': 'error',
		},
	},
	{
		ignores: [
			'.svelte-kit/**',
			'node_modules/**',
			'build/**',
			'dist/**',
			'*.config.*',
			'.eslintrc.*',
		],
	},
];