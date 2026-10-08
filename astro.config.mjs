// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rynomster.github.io',
  base: '/gateandguard.co.za/',
  output: 'static',
  integrations: [sitemap()],
});
