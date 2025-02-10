import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

const config: UserConfig = {
	plugins: [UnoCSS(), sveltekit()],
	assetsInclude: ['**/*.pdf'],
	base: '/slick-portfolio-svelte'
};

export default defineConfig(config);
