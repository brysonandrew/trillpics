import { resolveTypeDeclaration } from '~ops/template/array/type/declaration';
import { ASSIGNMENT_OPERATOR } from '~ops/template/operators';
import { SOURCE_PREFIX_INTERNAL } from '~ops/template/module/prefix/internal';
import { capitalize } from '~ops/routes/format';
import { resolveModuleNamedImport } from '~ops/template/module/named/import';
import pkg from '~root/package.json';
import { MODULE_DECLARATIONS } from '~ops/template/declarations/constants';
const dependencies = pkg.dependencies;

export const INDEX_PAGES = [
  "index",
  "home",
];

export const isIndex = (p: string) =>
  INDEX_PAGES.some(
    (v) => v === p.toLowerCase()
  );

export type TRoutePages = {
  pagesIndex: string;
  routesIndex: string
  routesPages: string;
};
export type TRoutePagesKey =
  keyof TRoutePages;

export const PAGES_VARIABLE_NAME = "PAGE_ROUTES";

export const ROUTES_VARIABLE_NAME = "ROUTES";

const TYPE_DECLARATION = resolveTypeDeclaration('RouteObject[]');

export const REACT_ROUTER_IMPORT_ROW = resolveModuleNamedImport('RouteObject','react-router');
// `import { RouteObject } from "react-router";`;
const NOT_FOUND_SOURCE = '@brysonandrew/routes-not-found';

if (!(NOT_FOUND_SOURCE in dependencies)) {
  throw Error("Not found lib not found");
}

export const NOT_FOUND_IMPORT_ROW = resolveModuleNamedImport('NotFound', NOT_FOUND_SOURCE);
const SHELL_NAME = 'shell';
export const SHELL_IMPORT_ROW = resolveModuleNamedImport(SHELL_NAME, `${SOURCE_PREFIX_INTERNAL}${capitalize(SHELL_NAME)}`);
// import { Shell } from "~/shell";
export const PAGES_IMPORT_ROW = resolveModuleNamedImport(PAGES_VARIABLE_NAME, `${SOURCE_PREFIX_INTERNAL}${capitalize(SHELL_NAME)}`);
// import { ${PAGES_VARIABLE_NAME} } from "./pages"
const IMPORT_ROWS = [NOT_FOUND_IMPORT_ROW, REACT_ROUTER_IMPORT_ROW, SHELL_IMPORT_ROW] as const;
// const IMPORT_ROWS_STR = IMPORT_ROWS.join(`\n`);
// `${SOURCE_PREFIX_INTERNAL}${}`
const MAIN = `${MODULE_DECLARATIONS['export const']} ${ROUTES_VARIABLE_NAME}${TYPE_DECLARATION} ${ASSIGNMENT_OPERATOR} [` as const;

export const ROUTES_INDEX_FILE = `${IMPORT_ROWS}
${MAIN}
  {
    path: "/",
    Component: Shell,
    children: [
      ...${PAGES_VARIABLE_NAME},
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];

`;
