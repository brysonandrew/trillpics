import { IconsMusic } from "~/components/icons/music";
import { IconsGallery } from "~/components/icons/pic/gallery";
import { IconsMovie } from "~/components/icons/movie";
import { ROUTES_PATHS } from "~/routes/pages";
import { IconsVideo } from "~/components/icons/video/video";
export const PAGE_TITLES = {
  ["AI Art Gallery"]: "AI Art Gallery",
  ["Video Pics"]: "Video Pics",
  ["Song Pics"]: "Song Pics",
  ["Kino"]: "Kino",
} as const;

export const NAV_ITEMS = [
  [
    IconsGallery,
    ROUTES_PATHS["/"],
    PAGE_TITLES["AI Art Gallery"],
  ],
  [
    IconsMovie,
    ROUTES_PATHS["/video"],
    PAGE_TITLES["Video Pics"],
  ],
  [
    IconsMusic,
    ROUTES_PATHS["/video/sound"],
    PAGE_TITLES["Song Pics"],
  ],
  [
    IconsVideo,
    ROUTES_PATHS["/video/player"],
    PAGE_TITLES["Kino"],
  ],
] as const;
