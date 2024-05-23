import { parse } from "path";
import {
  REACT_ROUTER_IMPORT_ROW,
  ROUTES_INDEX_FILE,
} from "~ops/routes/config";
import {
  dirToPascal,
  dirToSnake,
} from "~ops/format/dir";
import { resolveRouteFromPath } from "~ops/routes/route/from-path";
import { isIndex } from "~ops/routes/route/row/index-check";
import { endTemplateArray } from "~ops/template/array/end";
import { resolveModuleNamedExport } from "~ops/template/module/named/export";
import { resolveModuleNamedImport } from "~ops/template/module/named/import";
import { SOURCE_PREFIX_INTERNAL } from "~ops/template/module/prefix/internal";
import { TRoutePages } from "~ops/routes/types";
import { templateAssignmentEquals } from "~ops/template/assignment/equals";
import { MODULE_DECLARATIONS } from "~ops/template/declarations/constants";
import { templateAssignmentColon } from "~ops/template/assignment/colon";
import { SHELL_ROUTES_PAGES_NAME } from "~ops/routes/pages/config";
import { symmetryQuote } from "~ops/template/symmetry/quote";

const NAME = templateAssignmentColon(
  `${MODULE_DECLARATIONS["export const"]} ${SHELL_ROUTES_PAGES_NAME}`,
  "RouteObject[]"
);
const MAIN = templateAssignmentEquals(
  `${NAME} `,
  "[\n"
);

export const routesPages = (
  paths: string[]
) =>
  paths.reduce(
    (
      a: TRoutePages,
      path,
      index,
      { length: count },
      isFirst = index === 0,
      isLast = index === count - 1
    ) => {
      const { dir } = parse(path);
      const pascal = dirToPascal(dir);
      const snake = dirToSnake(dir);

      const exportRow =
        resolveModuleNamedExport(
          `${pascal}${
            isIndex(dir)
              ? " as Index"
              : ""
          }`,
          `${SOURCE_PREFIX_INTERNAL}pages/${dir}`
        );
      a.pagesIndex += exportRow;

      const importRow =
        resolveModuleNamedImport(
          pascal,
          `${SOURCE_PREFIX_INTERNAL}pages/${dir}`
        );
      a.routesPages = `${importRow}${a.routesPages}`;

      if (isFirst) {
        a.routesPages += `
        ${MAIN}`;
      }

      const nextRoute = 
        resolveRouteFromPath(dir);
      a.routesPages += `${nextRoute},`;

      if (isLast) {
        a.routesPages = `${REACT_ROUTER_IMPORT_ROW}${a.routesPages}`;
        a.routesPages +=
          endTemplateArray();
      }
      const exportConstRow = `${
        MODULE_DECLARATIONS[
          "export const"
        ]
      } ${snake}_ROUTE = ${symmetryQuote(
        `/${dir}`
      )};\n`;

      a.routesIndex = `${a.routesIndex}${exportConstRow}`;

      return a;
    },
    {
      pagesIndex: "",
      routesPages: "",
      routesIndex: ROUTES_INDEX_FILE,
    }
  );
