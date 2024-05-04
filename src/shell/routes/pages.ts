import { RouteObject } from "react-router";
import { VideoPlayer } from "~/pages/video/player";
import { VideoScheduler } from "~/pages/video/scheduler";
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
      path: "/video/scheduler",
      Component: VideoScheduler,
    },
    {
      path: "/video/player",
      Component: VideoPlayer,
    },
  ];
