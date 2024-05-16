import { NotFound } from "@brysonandrew/routes-not-found";
import { RouteObject } from "react-router";
import { Shell } from "~/shell";
import { Pics } from "~/pics";
import { SHELL_ROUTES_PAGES } from "~/shell/routes/pages";
import { Video } from "~/pages/video";
import { HomeCursor } from "~/pages";
import { Home } from "~/pages/home";
import { VideoFooter } from "~/pages/video/_common/footer";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    Component: Shell,
    children: [
      {
        path: "/",
        Component: Pics,
        children: [
          {
            path: "/",
            Component: Home,
          },
          // {
          //   path: "/home/cursor",
          //   Component: HomeCursor,
          // },
          {
            path: "/video",
            Component: VideoFooter,
            children: [
              ...SHELL_ROUTES_PAGES,
            ],
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];

export const HOME_ROUTE = "/home";
export const VIDEO_ROUTE = "/video";
export const HOME_CURSOR_ROUTE =
  "/home/cursor";
export const VIDEO_PLAYER_ROUTE =
  "/video/player";
export const VIDEO_SCHEDULER_ROUTE =
  "/video/scheduler";
