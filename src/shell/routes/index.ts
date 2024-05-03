import { NotFound } from "@brysonandrew/routes-not-found";
  import { RouteObject } from "react-router";
  import { Shell } from "~/shell";
  import { PAGE_ROUTES } from "./pages"
  
  export const ROUTES: RouteObject[] = [
    {
      path: "/",
      Component: Shell,
      children: [
        ...PAGE_ROUTES,
        {
          path: "*",
          Component: NotFound,
        },
      ],
    },
  ];
  

