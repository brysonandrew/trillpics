import { IconsHome } from "~/components/icons/home";
import { IconsMusic } from "~/components/icons/music";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsVideo } from "~/components/icons/video/video";
import { ROUTES_PATHS } from "~/routes/pages";

export const NAV_ITEMS = [
  [IconsHome, ROUTES_PATHS['/']],
  [IconsVideo, ROUTES_PATHS['/video']],
  [IconsMusic, ROUTES_PATHS['/video/sound']],
  [IconsPlay, ROUTES_PATHS['/video/player']],
] as const;
