import { PRESETS_DISCO } from "~/hooks/sound/beats/presets/disco";
import { PRESETS_TECHNO } from "~/hooks/sound/beats/presets/techno";
import { TPurcussionPresetRecord } from "~/hooks/sound/beats/types";

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
    cymbal: [
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0,
    ],
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
    cymbal: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
    ],
  },
} as const satisfies TPurcussionPresetRecord;
