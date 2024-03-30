import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import unoCss from "unocss/vite";
import {nodePolyfills} from "vite-plugin-node-polyfills"

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['mlly','local-pkg', 'fs'],
      onwarn(warning, warn) {
        if (
          warning.code ===
          "MODULE_LEVEL_DIRECTIVE"
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [
    nodePolyfills({exclude:['fs']}),
    unoCss({ inspector: true }),
    tsConfigPaths({
      loose: true,
    }),
    react(),

  ],
  server: {
    port: 3000,
  },
  publicDir: "public",
  esbuild: {
    logOverride: {
      "this-is-undefined-in-esm":
        "silent",
    },
  },
});
