import { RouteObject } from "react-router";
import { VideoPlayer } from "~/pages/video/player";
import { Video } from "~/pages/video";
import { VideoMusic } from "~/pages/video/music";
import { Synthwave } from "@index";

export const ROUTES_PATHS = {
  "/": "/",
  ["/video"]: "/video",
  ["/video/synthwave"]:
    "/video/synthwave",
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
      path: ROUTES_PATHS[
        "/video/synthwave"
      ],
      Component: Synthwave,
    },

    {
      path: ROUTES_PATHS[
        "/video/sound"
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
