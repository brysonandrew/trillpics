import { TError } from "@brysonandrew/config-types";
import glob from "fast-glob";
import { writeFile } from "fs/promises";
import {
  PAGES_INDEX,
  ROUTES_INDEX,
  ROUTES_PAGE,
  PAGES_DIR,
} from "~ops/fs";
import { routesPages } from "~ops/routes/pages";
import { TRoutePagesKey } from "~ops/routes/types";
import * as prettier from "prettier";

const IGNORE_UNDERSCORE_DIR_FIND_INDEX =
  "[!_]**/index*";
const IGNORE_UNDERSCORE_DIR_FIND_INDEX_2 =
  "[!_]**/[!_]**/index*";

const WRITE_TO_PATH_LOOKUP = {
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
      routesPages(paths);
    const entries = Object.entries(
      pageRecord
    ) as [TRoutePagesKey, string][];

    for await (const [
      name,
      file,
    ] of entries) {
      const pagePath =
        WRITE_TO_PATH_LOOKUP[name];
      const formattedFile =
        await prettier.format(file, {
          semi: true,
          printWidth: 40,
          babel: false,
        });
      await writeFile(
        pagePath,
        formattedFile
      );
    }
  } catch (error: TError) {
    throw new Error(error);
  }
})();
