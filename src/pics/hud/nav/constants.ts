import { IconsMusic } from "~/components/icons/music";
import { IconsGallery } from "~/components/icons/pic/gallery";
import { IconsMovie } from "~/components/icons/movie";
import { ROUTES_PATHS } from "~/routes/pages";
import { IconsVideo } from "~/components/icons/video/video";
export const PAGE_TITLES = {
  ["AI Art Gallery"]: "AI Art Gallery",
  ["Sequence"]: "Sequence",
  ["Music"]: "Music",
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
    PAGE_TITLES["Sequence"],
  ],
  [
    IconsMusic,
    ROUTES_PATHS["/video/music"],
    PAGE_TITLES["Music"],
  ],
  [
    IconsVideo,
    ROUTES_PATHS["/video/player"],
    PAGE_TITLES["Kino"],
  ],
] as const;
