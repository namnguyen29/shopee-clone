import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4569
  },
  resolve: {
    alias: {
      '@app-pages': path.resolve(__dirname, './src/app/pages'),
      '@app-containers': path.resolve(__dirname, './src/app/containers'),
      '@app-core': path.resolve(__dirname, './src/app/core'),
      '@app-environments': path.resolve(__dirname, './src/environments'),
      '@app-shared': path.resolve(__dirname, './src/app/shared')
    }
  }
});
