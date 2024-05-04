import { snakeToDir } from "~ops/format/snake";
import { SHELL_ROUTES_PAGES_NAME } from "~ops/routes/pages/config";
import { resolveRouteWithChildren } from "~ops/routes/route/with-children";
import { resolveModuleNamedImport } from "~ops/template/module/named/import";
import { SOURCE_PREFIX_INTERNAL } from "~ops/template/module/prefix/internal";

const PICS_NAME = "Pics";
const PICS_VALUE =
  `${SOURCE_PREFIX_INTERNAL}${snakeToDir(
    PICS_NAME
  )}` as const;

export const PICS_IMPORT_ROW =
  resolveModuleNamedImport(
    PICS_NAME,
    PICS_VALUE
  );
const PICS_CHILDREN = `
  ...${SHELL_ROUTES_PAGES_NAME}
` as const;

export const PICS_ROUTE =
  resolveRouteWithChildren(
    "/",
    PICS_NAME,
    PICS_CHILDREN
  );
