import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://askerka00.github.io',
  base: '/NovaViaConsulting', // название вашего репозитория
  output: 'static',
  build: {
    assets: '_astro' // явно указываем папку для ресурсов
  },
  vite: {
    build: {
      assetsInlineLimit: 0 // отключаем инлайн ресурсов
    }
  }
});
