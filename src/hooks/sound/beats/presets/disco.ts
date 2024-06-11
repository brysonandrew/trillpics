import {
  BEATS_4,
  BEATS_2,
  BEATS_4_2,
} from "~/constants/music/beats";
import { TPurcussionRecord } from "~/hooks/sound/beats/types";

export const PRESETS_DISCO = {
  kick: [...BEATS_4],
  snare: [...BEATS_4_2],
  hihat: [...BEATS_2]
} as const satisfies Partial<TPurcussionRecord>;
