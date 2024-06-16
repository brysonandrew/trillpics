import {
  BEATS_4_2,
  BEATS_4_4,
} from "~/constants/music/beats";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { PRESETS_DISCO } from "~/hooks/music/beats/presets/disco";
import { PRESETS_TECHNO } from "~/hooks/music/beats/presets/techno";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import {
  TBeatsStepsKey,
  TBeatsPresetRecord,
  TBeatsRecord,
} from "~/hooks/music/beats/types";

export const BEATS_PRESETS = {
  disco: PRESETS_DISCO,
  techno: PRESETS_TECHNO,
  rock: {
    kick: [
      1,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      1,
      null,
      1,
      null,
      null,
      null,
      null,
      null,
    ],
    snare: [
      null,
      null,
      null,
      null,
      1,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      1,
      null,
      null,
      null,
    ],
    hihat: [
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
    ],
    tom: [...BEATS_4_4],
  },
  rap: {
    kick: [
      1,
      null,
      null,
      1,
      null,
      null,
      1,
      null,
      null,
      null,
      1,
      null,
      null,
      1,
      null,
      null,
    ],
    snare: [
      null,
      null,
      null,
      null,
      1,
      null,
      null,
      null,
      null,
      null,
      null,
      1,
      null,
      null,
      null,
      null,
    ],
    hihat: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1,
    ],
    tom: [...BEATS_4_2],
  },
} as const satisfies TBeatsPresetRecord;
