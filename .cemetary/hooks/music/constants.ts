import { MIDIS_KEYS } from "~/hooks/music/midis/constants";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";


export const SOUNDS = [
  ...BEATS_KEYS,
  ...MIDIS_KEYS,
] as const;
