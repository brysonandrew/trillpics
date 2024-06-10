import path from "path";
import { WebpackOverrideFn } from "@remotion/bundler";
import { TStringRecord } from "@brysonandrew/config-types";

export const webpackOverride: WebpackOverrideFn =
  (currentConfig) => {
    const initCwd =
      process.env.INIT_CWD ?? "";
    const record = [
      "pages",
      "pics",
      "shell",
      "components",
      "hooks",
      "constants",
      "utils",
      "css",
      "store",
      "remotion",
      "context",
    ].reduce(
      (a, c) => ({
        ...a,
        [`~/${c}`]: path.resolve(
          initCwd,
          "src",
          c
        ),
      }),
      {} as TStringRecord
    );
    // const configRecord = [
    //   "app",
    //   "routes",
    //   "uno",
    //   "vite",
    // ].reduce(
    //   (a, c) => ({
    //     ...a,
    //     [`~/${c}`]: path.resolve(
    //       initCwd,
    //       "config",
    //       c
    //     ),
    //   }),
    //   {} as TStringRecord
    // );
    // const entryPath = path.resolve(
    //   initCwd,
    //   "src"
    // );

    const entry = (...args: string[]) =>
      path.resolve(initCwd, ...args);

    const appEntry = entry(
      "config",
      "app"
    );
    const unoEntry = entry(
      "config",
      "uno"
    );
    const srcEntry = entry("src");

    return {
      ...currentConfig,
      // devtool: "source-map",
      // browser: {
      //   child_process: false,
      // },
      externals: ["child_process"],
      resolve: {
        ...currentConfig.resolve,
        fallback: {
          fs: false,
          os: false,
        },
        alias: {
          "~": srcEntry,
          "~app": appEntry,
          "~uno": unoEntry,
          // "~ops": entry("ops"),
          // "~root": entry("."),
          "~root/package.json": entry(
            "package.json"
          ),
          "~root/remotion.config":
            entry("remotion.config"),
          ...currentConfig.resolve
            ?.alias,
          // ...record,
        },
      },
    };
  };
