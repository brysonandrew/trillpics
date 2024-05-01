import glob from "fast-glob";
import { TError } from "@brysonandrew/config-types";
import { resolve } from "path";
import { resolvePwd } from "~ops/pwd";
import { processPaths } from "~ops/routes/process-paths";
import { TRoutePagesKey } from "~ops/routes/config";
import { writeFile } from "fs/promises";

const GLOBS = [
  "[!_]**/index*",
  "[!_]**/[!_]**/index*",
];

const ROOT = "src/pages";

const pwd = resolvePwd();
const cwd = resolve(pwd, ROOT);

export const PAGES_INDEX = [
  cwd,
  "/index.ts",
].join("");
export const ROUTES_PAGE = [
  pwd,
  "/config/app/routes/pages.ts",
].join("");
export const ROUTES_INDEX = [
  pwd,
  "/config/app/routes/index.ts",
].join("");

export const PAGES_LOOKUP = {
  pagesIndex: PAGES_INDEX,
  routesPages: ROUTES_PAGE,
  routesIndex: ROUTES_INDEX,

} as const;

(async () => {
  try {
    const paths = await glob(GLOBS, {
      cwd,
    });

    const pageRecord =
      processPaths(paths);
    const entries = Object.entries(
      pageRecord
    ) as [TRoutePagesKey, string][];
    for await (const [
      name,
      file,
    ] of entries) {
      const pagePath =
        PAGES_LOOKUP[name];
      await writeFile(pagePath, file);
    }
  } catch (error: TError) {
    throw new Error(error);
  }
})();
