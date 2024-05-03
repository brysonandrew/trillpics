import pkg from '~root/package.json';

const dependencies = pkg.dependencies;
const NOT_FOUND_SOURCE = '@brysonandrew/routes-not-found';

if (!(NOT_FOUND_SOURCE in dependencies)) {
  throw Error("Not found lib not found");
}

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

export const REACT_ROUTER_IMPORT_ROW = `import { RouteObject } from "react-router";`;
  
export const ROUTES_INDEX_FILE = `import { NotFound } from "${NOT_FOUND_SOURCE}";
  ${REACT_ROUTER_IMPORT_ROW}
  import { Shell } from "~/shell";
  import { ${PAGES_VARIABLE_NAME} } from "./pages"
  
  export const ROUTES: RouteObject[] = [
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