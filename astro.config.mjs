// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    image: {
      service: {
        entrypoint: 'astro/assets/services/noop'
      }
    }
  }
});
