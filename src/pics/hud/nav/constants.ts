import { IconsMusic } from "~/components/icons/music";
import { IconsGallery } from "~/components/icons/pic/gallery";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsReel } from "~/components/icons/reel";
import { ROUTES_PATHS } from "~/routes/pages";

export const NAV_ITEMS = [
  [IconsGallery, ROUTES_PATHS['/'], 'AI Art Gallery'],
  [IconsReel, ROUTES_PATHS['/video'], 'Video Sequencer'],
  [IconsMusic, ROUTES_PATHS['/video/sound'], 'Music Sequencer'],
  [IconsPlay, ROUTES_PATHS['/video/player'], 'Viewing Room'],
] as const;
