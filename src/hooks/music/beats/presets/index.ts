import {
  BEATS_4_2,
  BEATS_4_4,
  BEATS_8,
} from "~/constants/music/beats";
import { PRESETS_DISCO } from "~/hooks/music/beats/presets/disco";
import { PRESETS_TECHNO } from "~/hooks/music/beats/presets/techno";
import { TPurcussionPresetRecord } from "~/hooks/music/beats/types";

export const BEATS_PRESETS = {
  disco: PRESETS_DISCO,
  techno: PRESETS_TECHNO,
  rock: {
    kick: [
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 0, 0, 0, 0,
    ],
    snare: [
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0,
    ],
    hihat: [
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0,
    ],
    tom: [...BEATS_4_4],
  },
  rap: {
    kick: [
      1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
      0, 0, 1, 0, 0,
    ],
    snare: [
      0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
      1, 0, 0, 0, 0,
    ],
    hihat: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
    ],
    tom: [...BEATS_4_2],
  },
} as const satisfies TPurcussionPresetRecord;
