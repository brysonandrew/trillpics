import { RouteObject } from "react-router";
import { Shell } from "~/shell";
import { ROUTES_PATHS, SHELL_ROUTES_PAGES } from "~/routes/pages";
import { Home } from "~/pages/home";
import { NotFound } from "~/routes/not-found";

export const ROUTES: RouteObject[] = [
  {
    path: ROUTES_PATHS["/"],
    Component: Shell,
    children: [
      {
        path: ROUTES_PATHS["/"],
        Component: Home,
      },
      ...SHELL_ROUTES_PAGES,
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];
