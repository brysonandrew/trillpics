import { IconsMusic } from "~/components/icons/music";
import { IconsGallery } from "~/components/icons/pic/gallery";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsMovie } from "~/components/icons/movie";
import { ROUTES_PATHS } from "~/routes/pages";
import { IconsVideo } from "~/components/icons/video/video";

export const NAV_ITEMS = [
  [
    IconsGallery,
    ROUTES_PATHS["/"],
    "AI Art Gallery",
  ],
  [
    IconsMovie,
    ROUTES_PATHS["/video"],
    "Video Sequencer",
  ],
  [
    IconsMusic,
    ROUTES_PATHS["/video/sound"],
    "Music Sequencer",
  ],
  [
    IconsVideo,
    ROUTES_PATHS["/video/player"],
    "Viewing Room",
  ],
] as const;
