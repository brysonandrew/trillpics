import { RouteObject } from "react-router";
import { VideoPlayer } from "~/pages/video/player";
import { Video } from "~/pages/video";

export const SHELL_ROUTES_PAGES: RouteObject[] =
  [
    {
      path: "/video",
      Component: Video,
    },
    {
      path: "/video/player",
      Component: VideoPlayer,
    },
  ];
