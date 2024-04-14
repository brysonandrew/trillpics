import {
  defineConfig,
  UserConfig,
  loadEnv,
} from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
// import react from "@vitejs/plugin-react-swc";
import unoCss from "unocss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export const VITE_CONFIG: UserConfig = {
  build: {
    rollupOptions: {
      external: [
        "mlly",
        "local-pkg",
        "fs",
      ],
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
    nodePolyfills({ exclude: ["fs"] }),
    unoCss({ inspector: true }),
    tsConfigPaths({
      loose: true,
    }),
    react(),
  ],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3000",
  },
  publicDir: "assets",
  esbuild: {
    logOverride: {
      "this-is-undefined-in-esm":
        "silent",
    },
  },
  envPrefix: "_"
};

export default defineConfig(
  ({ mode }) => {
    process.env = {
      ...process.env,
      ...loadEnv(mode, process.cwd()),
    };
    return VITE_CONFIG;
  }
);
