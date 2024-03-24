import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import unoCss from "unocss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import { Plugin } from "rollup";

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        rollupNodePolyFill() as Plugin<any>,
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
    // nodePolyfills({
    //   include: ["fs", "stream"],
    // }),
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
  // resolve: {
  //   alias: {
  //     path: "rollup-plugin-node-polyfills/polyfills/path",
  //     "node:path":
  //       "rollup-plugin-node-polyfills/polyfills/path",
  //     util: "rollup-plugin-node-polyfills/polyfills/util",
  //     assert:
  //       "rollup-plugin-node-polyfills/polyfills/assert",
  //     os: "rollup-plugin-node-polyfills/polyfills/os",
  //     buffer:
  //       "rollup-plugin-node-polyfills/polyfills/buffer-es6",
  //     process:
  //       "rollup-plugin-node-polyfills/polyfills/process-es6",
  //     fs: "rollup-plugin-node-polyfills/polyfills/empty",
  //     net: "rollup-plugin-node-polyfills/polyfills/empty",
  //     perf_hooks:
  //       "rollup-plugin-node-polyfills/polyfills/empty",
  //     child_process:
  //       "rollup-plugin-node-polyfills/polyfills/empty",
  //     "node:process":
  //       "rollup-plugin-node-polyfills/polyfills/process-es6",
  //     "node:fs":
  //       "rollup-plugin-node-polyfills/polyfills/empty",
  //     // "node:fs/promises":
  //     //   "rollup-plugin-node-polyfills/polyfills/empty",
  //     // "**/promises":
  //     //   "rollup-plugin-node-polyfills/polyfills/empty",
  //     // promises:
  //     //   "rollup-plugin-node-polyfills/polyfills/empty",
  //     "node:url":
  //       "rollup-plugin-node-polyfills/polyfills/empty",
  //     "node:module":
  //       "rollup-plugin-node-polyfills/polyfills/empty",
  //     "node:assert":
  //       "rollup-plugin-node-polyfills/polyfills/empty",
  //     "node:v8":
  //       "rollup-plugin-node-polyfills/polyfills/empty",
  //     "node:util":
  //       "rollup-plugin-node-polyfills/polyfills/empty",
  //     // "rollup-plugin-node-polyfills/polyfills/empty/promises":
  //     //   "rollup-plugin-node-polyfills/polyfills/empty",
  //     sys: "util",
  //     events:
  //       "rollup-plugin-node-polyfills/polyfills/events",
  //     stream:
  //       "rollup-plugin-node-polyfills/polyfills/stream",
  //     querystring:
  //       "rollup-plugin-node-polyfills/polyfills/qs",
  //     punycode:
  //       "rollup-plugin-node-polyfills/polyfills/punycode",
  //     url: "rollup-plugin-node-polyfills/polyfills/url",
  //     string_decoder:
  //       "rollup-plugin-node-polyfills/polyfills/string-decoder",
  //     http: "rollup-plugin-node-polyfills/polyfills/http",
  //     https:
  //       "rollup-plugin-node-polyfills/polyfills/http",
  //     constants:
  //       "rollup-plugin-node-polyfills/polyfills/constants",
  //     _stream_duplex:
  //       "rollup-plugin-node-polyfills/polyfills/readable-stream/duplex",
  //     _stream_passthrough:
  //       "rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough",
  //     _stream_readable:
  //       "rollup-plugin-node-polyfills/polyfills/readable-stream/readable",
  //     _stream_writable:
  //       "rollup-plugin-node-polyfills/polyfills/readable-stream/writable",
  //     _stream_transform:
  //       "rollup-plugin-node-polyfills/polyfills/readable-stream/transform",
  //     timers:
  //       "rollup-plugin-node-polyfills/polyfills/timers",
  //     console:
  //       "rollup-plugin-node-polyfills/polyfills/console",
  //     vm: "rollup-plugin-node-polyfills/polyfills/vm",
  //     zlib: "rollup-plugin-node-polyfills/polyfills/zlib",
  //     tty: "rollup-plugin-node-polyfills/polyfills/tty",
  //     domain:
  //       "rollup-plugin-node-polyfills/polyfills/domain",
  //   },
  // },
});
