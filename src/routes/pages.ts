import { RouteObject } from "react-router";
import { VideoPlayer } from "~/pages/video/player";
import { Video } from "~/pages/video";
import { VideoSound } from "~/pages/video/sound";

export const ROUTES_PATHS = {
  "/": "/",
  ["/video"]: "/video",
  ["/video/sound"]: "/video/sound",
  ["/video/player"]: "/video/player",
};

export const SHELL_ROUTES_PAGES: RouteObject[] =
  [
    {
      path: ROUTES_PATHS["/video"],
      Component: Video,
    },
    {
      path: ROUTES_PATHS["/video/sound"],
      Component: VideoSound,
    },
    {
      path: ROUTES_PATHS["/video/player"],
      Component: VideoPlayer,
    },
  ];
