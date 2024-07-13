import path, { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const env = process.env;
//Set a base route if deploying on github pages
env.mode = env.mode || 'production';

console.log('Environment: ', env.mode);
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  //Add base route if deploying on production
  base: env.mode === 'production' ? '/web-app-ventas/' : '/',
  plugins: [react()],

  // Alias
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@js': path.resolve(__dirname, './src/assets/js'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },

  // Expose server to network
  server: {
    host: '0.0.0.0'
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    commonjsOptions: { transformMixedEsModules: true } // Change
  }
});
