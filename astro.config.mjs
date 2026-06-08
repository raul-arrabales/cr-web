// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkLegacyContentMedia from './src/plugins/remarkLegacyContentMedia.mjs';

export default defineConfig({
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
