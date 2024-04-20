import { NotFound } from "@brysonandrew/not-found";
import { TRouteObjects } from "@brysonandrew/routes";
import { Home } from "~/pages/home";
import { VideoPlayer } from "~/remotion/player";
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
        path: "/video",
        Component: VideoPlayer,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];
