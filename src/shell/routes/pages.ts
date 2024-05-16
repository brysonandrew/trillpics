import { RouteObject } from "react-router";
import { VideoScheduler } from "~/pages/video/scheduler";
import { VideoPlayer } from "~/pages/video/player";
import { HomeCursor } from "~/pages/home/cursor";
import { Video } from "~/pages/video";
import { Home } from "~/pages/home";

export const SHELL_ROUTES_PAGES: RouteObject[] =
  [
    { path: "/", Component: Home },
    {
      path: "/video",
      Component: Video,
    },
    {
      path: "/home/cursor",
      Component: HomeCursor,
    },
    {
      path: "/video/player",
      Component: VideoPlayer,
    },
    {
      path: "/video/scheduler",
      Component: VideoScheduler,
    },
  ];
