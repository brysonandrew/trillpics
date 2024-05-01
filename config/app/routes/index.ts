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
  

  
export const Home_ROUTE = "/home";
export const Video_ROUTE = "/video";
export const Video_Player_ROUTE = "/video/player";
export const Video_Scheduler_ROUTE = "/video/scheduler";