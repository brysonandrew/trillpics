import path from "path";
import { WebpackOverrideFn } from "@remotion/bundler";
import { TStringRecord } from "@brysonandrew/config-types";

export const webpackOverrideFn: WebpackOverrideFn =
  (currentConfig) => {
    const initCwd =
      process.env.INIT_CWD ?? "";
    const record = [
      "video",
      "pages",
      "shell",
      "components",
      "hooks",
      "constants",
      "utils",
      "css",
      "store",
    ].reduce(
      (a, c) => ({
        ...a,
        [`@${c}`]: path.resolve(
          initCwd,
          "src",
          c
        ),
      }),
      {} as TStringRecord
    );
    const configRecord = [
      "app",
      "routes",
      "uno",
      "vite",
    ].reduce(
      (a, c) => ({
        ...a,
        [`@${c}`]: path.resolve(
          initCwd,
          "config",
          c
        ),
      }),
      {} as TStringRecord
    );
    return {
      ...currentConfig,
      resolve: {
        ...currentConfig.resolve,
        alias: {
          ...currentConfig.resolve
            ?.alias,
          ...record,
          ...configRecord,
        },
      },
    };
  };
