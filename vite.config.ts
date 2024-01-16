import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassDts()],
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@widgets': '/src/widgets',
      '@feature': '/src/feature',
      '@entities': '/src/entities',
      '@shared': '/src/shared',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
      @import "./src/shared/styles/colors.scss";
      @import "./src/shared/styles/mixins.scss";
      @import "./src/shared/styles/typography.scss";
      `,
      },
    },
  },
  server: {
    port: 3030,
  },
});
