import {
  BEATS_4,
  BEATS_2,
  BEATS_4_2,
  BEATS_8,
} from "~/constants/music/beats";
import { TBeatsRecord } from "~/hooks/music/beats/types";

export const PRESETS_DISCO = {
  kick: [...BEATS_4],
  snare: [...BEATS_4_2],
  hihat: [...BEATS_2],
  tom:[...BEATS_8],
} as const satisfies Partial<TBeatsRecord>;
