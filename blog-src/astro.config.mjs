import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.thejoom.net',
  base: '/blog',
  trailingSlash: 'always',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
