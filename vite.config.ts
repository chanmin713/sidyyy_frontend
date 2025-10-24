import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sidyyy_front/', // GitHub Pages 저장소 이름
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
