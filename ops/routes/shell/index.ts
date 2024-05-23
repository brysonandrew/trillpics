import { snakeToDir } from "~ops/format/snake";
import { NOT_FOUND } from "~ops/routes/not-found";
import { PICS_ROUTE } from "~ops/routes/pics";
import { resolveRouteWithChildren } from "~ops/routes/route/with-children";
import { resolveModuleNamedImport } from "~ops/template/module/named/import";
import { SOURCE_PREFIX_INTERNAL } from "~ops/template/module/prefix/internal";
import { symmetryBracesCurly } from "~ops/template/symmetry/braces/curly";

const SHELL_NAME = "Shell";
const SHELL_VALUE =
  `${SOURCE_PREFIX_INTERNAL}${snakeToDir(
    SHELL_NAME
  )}` as const;

export const SHELL_IMPORT_ROW =
  resolveModuleNamedImport(
    SHELL_NAME,
    SHELL_VALUE
  );

const SHELL_CHILDREN =
  `${symmetryBracesCurly(PICS_ROUTE)},
    ${NOT_FOUND.ROWS}` as const;

export const SHELL_ROUTE =
  resolveRouteWithChildren(
    "/",
    SHELL_NAME,
    SHELL_CHILDREN
  );
