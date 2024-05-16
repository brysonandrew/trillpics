import { resolvePwd } from "~ops/pwd";

const pwd = resolvePwd();

const SRC = "/src";

export const TEST_SCREENS_DIR = `${pwd}/test/screens/prev`

export const PAGES_DIR =
  `${pwd}${SRC}${"/pages"}` as const;

  export const PAGES_INDEX =
  `${PAGES_DIR}${"/index.ts"}` as const;

  export const ROUTES_DIR =
  `${pwd}${SRC}${"/shell/routes"}` as const;

  export const ROUTES_PAGE =
  `${ROUTES_DIR}${"/pages.ts"}` as const;

  export const ROUTES_INDEX =
  `${ROUTES_DIR}${"/index.ts"}` as const;

