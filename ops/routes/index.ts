import glob from "fast-glob";
import { TError } from "@brysonandrew/config-types";
import { resolvePwd } from "~ops/pwd";
import { processPaths } from "~ops/routes/process-paths";
import { TRoutePagesKey } from "~ops/routes/config";
import { writeFile } from "fs/promises";

const IGNORE_UNDERSCORE_DIR_FIND_INDEX =
  "[!_]**/index*";
const IGNORE_UNDERSCORE_DIR_FIND_INDEX_2 =
  "[!_]**/[!_]**/index*";

const pwd = resolvePwd();

const PAGES_DIR =
  `${pwd}${"src/pages"}` as const;

const PAGES_INDEX =
  `${PAGES_DIR}${"/index.ts"}` as const;

const ROUTES_DIR =
  `${pwd}${"/src/shell/routes"}` as const;

const ROUTES_PAGE =
  `${ROUTES_DIR}${"/pages.ts"}` as const;

export const ROUTES_INDEX =
  `${ROUTES_DIR}${"/index.ts"}` as const;

export const WRITE_TO_PATH_LOOKUP = {
  pagesIndex: PAGES_INDEX,
  routesIndex: ROUTES_INDEX,
  routesPages: ROUTES_PAGE,
} as const satisfies Record<
  TRoutePagesKey,
  string
>;

(async () => {
  try {
    const paths = await glob(
      [
        IGNORE_UNDERSCORE_DIR_FIND_INDEX,
        IGNORE_UNDERSCORE_DIR_FIND_INDEX_2,
      ],
      {
        cwd: PAGES_DIR,
      }
    );

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
        WRITE_TO_PATH_LOOKUP[name];
      await writeFile(pagePath, file);
    }
  } catch (error: TError) {
    throw new Error(error);
  }
})();
