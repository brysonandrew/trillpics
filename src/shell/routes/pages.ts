import { RouteObject } from "react-router";
import { VideoScheduler } from '~/pages/video/scheduler';
import { VideoPlayer } from '~/pages/video/player';
import { Video } from '~/pages/video';
import { Home } from '~/pages/home';

export const PAGE_ROUTES: RouteObject[] = [{
    index: true,
    Component: Home,
    path: "/home",
  },
{
    Component: Video,
    path: "/video",
  },
{
    Component: VideoPlayer,
    path: "/video/player",
  },
{
    Component: VideoScheduler,
    path: "/video/scheduler",
  },

];