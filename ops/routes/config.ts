import { resolveModuleNamedImport } from "~ops/template/module/named/import";
import { NOT_FOUND } from "~ops/routes/not-found";
import { templateAssignmentEquals } from "~ops/template/assignment/equals";
import {
  SHELL_IMPORT_ROW,
} from "~ops/routes/shell";
import { NAME } from "~ops/routes/name";
import { VALUE } from "~ops/routes/value";
import { PICS_IMPORT_ROW } from "~ops/routes/pics";
import { PAGES_IMPORT_ROW } from "~ops/routes/pages/config";

export const REACT_ROUTER_IMPORT_ROW =
  resolveModuleNamedImport(
    "RouteObject",
    "react-router"
  );

const MAIN = templateAssignmentEquals(
  NAME,
  VALUE
);

export const ROUTES_INDEX_FILE =
  `${NOT_FOUND.IMPORT_ROW}${REACT_ROUTER_IMPORT_ROW}${SHELL_IMPORT_ROW}${PICS_IMPORT_ROW}${PAGES_IMPORT_ROW}
${MAIN};

` as const;
