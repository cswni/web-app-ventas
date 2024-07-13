import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
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
  }
});
