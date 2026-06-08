// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkLegacyContentMedia from './src/plugins/remarkLegacyContentMedia.mjs';

export default defineConfig({
  site: "https://conscious-robots.com",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkLegacyContentMedia],
    }),
    image: {
      service: {
        entrypoint: 'astro/assets/services/noop'
      }
    }
  }
});
