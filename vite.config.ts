import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173,
    host: true,
    historyApiFallback: true,
  },
  build: {
    // 번들 크기 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-icons'],
          state: ['zustand'],
        },
      },
    },
    // 압축 최적화
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 청크 크기 경고 임계값 증가
    chunkSizeWarningLimit: 1000,
  },
  // CSS 최적화
  css: {
    devSourcemap: false,
  },
  // 정적 리소스 최적화
  assetsInclude: ['**/*.woff2'],
});
