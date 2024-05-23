import { snakeToDir } from "~ops/format/snake";
import { resolveModuleNamedImport } from "~ops/template/module/named/import";
import { SOURCE_PREFIX_INTERNAL } from "~ops/template/module/prefix/internal";

export const SHELL_ROUTES_PAGES_NAME =
  "SHELL_ROUTES_PAGES";
export const SHELL_ROUTES_PAGES_VALUE =
  `${SOURCE_PREFIX_INTERNAL}${snakeToDir(
    SHELL_ROUTES_PAGES_NAME
  )}` as const;

export const PAGES_IMPORT_ROW =
resolveModuleNamedImport(
  SHELL_ROUTES_PAGES_NAME,
  SHELL_ROUTES_PAGES_VALUE
);

