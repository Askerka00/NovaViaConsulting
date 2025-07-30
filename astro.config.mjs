import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/', // убрать если репозиторий называется yourusername.github.io
  output: 'static',
  build: {
    assets: 'assets'
  }
});
