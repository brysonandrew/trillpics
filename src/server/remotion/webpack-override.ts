import path from "path";
import { WebpackOverrideFn } from "@remotion/bundler";
import { TStringRecord } from "@brysonandrew/config-types";

export const webpackOverride: WebpackOverrideFn =
  (currentConfig) => {
    const initCwd =
      process.env.INIT_CWD ?? "";
    const record = [
      "pages",
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
console.log(appEntry)
    return {
      ...currentConfig,
      devtool: "source-map",
      resolve: {
        ...currentConfig.resolve,
        alias: {
          "~": entry("src"),
          "~app": appEntry,
          "~uno/": entry(
            "config",
            "uno"
          ),
          "~ops/": entry("ops"),
          "~root/": entry("."),
          ...currentConfig.resolve
            ?.alias,
          ...record,
          // ...configRecord,
        },
      },
    };
  };
