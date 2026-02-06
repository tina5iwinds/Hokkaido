
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 必須與您的 GitHub 倉庫名稱完全一致
  // 因為您的倉庫名稱是 Hokkaido，所以這裡改為 /Hokkaido/
  base: '/Hokkaido/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});