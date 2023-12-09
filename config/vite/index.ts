import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import unoCss from 'unocss/vite';
import { compileTsServiceWorker } from './vite.compile-ts-service-worker';
import { SERVER } from './server';

export default defineConfig({
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [
    // compileTsServiceWorker(),
    tsConfigPaths(),
    react(),
    unoCss({ inspector: true }),
  ],
  server: SERVER,
  publicDir: 'assets',
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
