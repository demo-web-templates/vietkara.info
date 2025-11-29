import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Base path cho GitHub Pages: có thể là "/" (custom domain) hoặc "/vietkara.info/" (subpath)
    // Có thể override bằng env variable BASE_PATH
    // Mặc định là /vietkara.info/ vì repo name là vietkara.info
    let base = env.BASE_PATH || process.env.BASE_PATH || '/vietkara.info/';
    // Đảm bảo base path luôn bắt đầu và kết thúc bằng /
    if (base && base !== '/') {
      if (!base.startsWith('/')) base = '/' + base;
      if (!base.endsWith('/')) base = base + '/';
    }
    
    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'docs',
        assetsDir: 'assets',
      }
    };
});
