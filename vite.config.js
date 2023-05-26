import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    laravel({
      input: [
          'resources/css/app.css',
          'resources/js/app.jsx'
      ],
      refresh: true,
  }),
    react(),
  ],
  resolve: {
    alias: {
      '@': '/resources/js'
    }
  }
});
