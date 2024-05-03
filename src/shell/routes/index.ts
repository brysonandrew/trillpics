import { RouteObject } from "react-router";
import { Shell } from "~/shell";
import { Pics } from "~/shell/pics";
import { NotFound } from "~/shell/routes/not-found";
import { PAGE_ROUTES } from "~/shell/routes/pages";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    Component: Shell,
    children: [
      {
        path: "/",
        Component: Pics,
        children: [...PAGE_ROUTES],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];
