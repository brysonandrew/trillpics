import { NotFound } from "@brysonandrew/not-found";
import { TRouteObjects } from "@brysonandrew/routes";
import { DirectorsMode } from "~/pages/directors-mode";
import { Home } from "~/pages/home";
import { VideoPlayer } from "~/pages/video-player";
import { Shell } from "~/shell";

export const HOME_ROUTE = "/";

export const ROUTES: TRouteObjects = [
  {
    path: "/",
    Component: Shell,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/directors-mode",
        Component: DirectorsMode,
      },
      {
        path: "/video-player",
        Component: VideoPlayer,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];
