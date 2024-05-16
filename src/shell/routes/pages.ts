import { RouteObject } from "react-router";
import { VideoScheduler } from "~/pages/video/scheduler";
import { VideoPlayer } from "~/pages/video/player";
import { Video } from "~/pages/video";

export const SHELL_ROUTES_PAGES: RouteObject[] =
  [
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
