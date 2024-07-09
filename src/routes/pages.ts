import { RouteObject } from "react-router";
import { VideoPlayer } from "~/pages/video/player";
import { Video } from "~/pages/video";
import { VideoMusic } from "~/pages/video/music";

export const ROUTES_PATHS = {
  "/": "/",
  ["/video"]: "/video",
  ["/video/music"]: "/video/music",
  ["/video/player"]: "/video/player",
};

export const SHELL_ROUTES_PAGES: RouteObject[] =
  [
    {
      path: ROUTES_PATHS["/video"],
      Component: Video,
    },
    {
      path: ROUTES_PATHS[
        "/video/music"
      ],
      Component: VideoMusic,
    },
    {
      path: ROUTES_PATHS[
        "/video/player"
      ],
      Component: VideoPlayer,
    },
    
  ];
