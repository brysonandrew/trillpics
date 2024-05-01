import { NotFound } from "@brysonandrew/not-found";
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
  

  
export const HOME_ROUTE = "/home";
export const VIDEO_ROUTE = "/video";
export const VIDEO_PLAYER_ROUTE = "/video/player";
export const VIDEO_SCHEDULER_ROUTE = "/video/scheduler";