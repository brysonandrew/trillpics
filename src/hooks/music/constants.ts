import { MIDIS } from "~/hooks/music/midis/constants";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";


export const SOUNDS = [
  ...BEATS_KEYS,
  ...MIDIS,
] as const;
