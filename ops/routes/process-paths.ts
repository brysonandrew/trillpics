import { parse } from "path";
import { RouteObject } from "react-router";
import {
  isIndex,
  PAGES_VARIABLE_NAME,
  REACT_ROUTER_IMPORT_ROW,
  ROUTES_INDEX_FILE,
  TRoutePages,
} from "~ops/routes/config";
import {
  dirToPascal,
  dirToSnake,
} from "~ops/routes/format";
import { resolveRoute } from "~ops/routes/resolve-route";
import { endTemplateArray } from "~ops/template/array/end";
import { resolveModuleNamedExport } from "~ops/template/module/named/export";
import { resolveModuleNamedExportConst } from "~ops/template/module/named/export/const";
import { resolveModuleNamedImport } from "~ops/template/module/named/import";
import { SOURCE_PREFIX_INTERNAL } from "~ops/template/module/prefix/internal";

const EXPORT = {
  NAME: `${PAGES_VARIABLE_NAME}_ROUTE`,
  TYPE: `: RouteObject[]`,
  DECLARATION: `export const`,
  ASSIGNMENT: "=",
  VARIABLE: "[",
} as const;

type TPascal = string;

const MAIN =
  `${EXPORT.DECLARATION} ${EXPORT.NAME}${EXPORT.TYPE} ${EXPORT.ASSIGNMENT} ${EXPORT.VARIABLE}` as const;

export const processPaths = (
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
      const pascal: TPascal =
        dirToPascal(dir);
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
        a.routesPages += MAIN;
      }

      const nextRoute: RouteObject =
        resolveRoute(dir);
      a.routesPages += nextRoute;

      if (isLast) {
        a.routesPages = `${REACT_ROUTER_IMPORT_ROW}${a.routesPages}`;
        a.routesPages +=
          endTemplateArray();
      }
      const exportConstRow =
        resolveModuleNamedExportConst(
          `${snake}_ROUTE`,
          dir
        );

      a.routesIndex = `${a.routesIndex}${exportConstRow}`;

      return a;
    },
    {
      pagesIndex: "",
      routesPages: "",
      routesIndex: ROUTES_INDEX_FILE,
    }
  );

//export const ${exportConstRow} = "/${dir}";`;
// resolveModuleNamedExport(
//   `${snake}_ROUTE`,
//   dir
// );
