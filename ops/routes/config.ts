
export const INDEX_PAGES = [
  "index",
  "home",
];

export type TRoutePages = {
  pagesIndex: string;
  routesIndex: string
  routesPages: string;
};
export type TRoutePagesKey =
  keyof TRoutePages;
export const PAGES_VARIABLE_NAME = "PAGE_ROUTES"
  export const REACT_ROUTER_IMPORT_ROW = `import { RouteObject } from "react-router";`
  export const ROUTES_INDEX_FILE = `import { NotFound } from "@brysonandrew/not-found";
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
  

  `