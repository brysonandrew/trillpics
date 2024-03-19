import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import unoCss from 'unocss/vite';

export default defineConfig({
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code ===
          'MODULE_LEVEL_DIRECTIVE'
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [
    tsConfigPaths(),
    react(),
    unoCss({ inspector: true }),
  ],
  server: {
    port: 3000,
  },
  publicDir: 'public',
  esbuild: {
    logOverride: {
      'this-is-undefined-in-esm':
        'silent',
    },
  },
});
