import { BEATS_8 } from "~/constants/music/beats";
import { TBeatsRecord } from "~/hooks/music/beats/types";

export const PRESETS_TECHNO = {
  kick: [
    1, 1, null, 1, 1, null, 1, null, 1, 1, null, 1,
    null, 1, null, null,
  ],
  snare: [
    1, null, null, 1, 1, null, null, null, 1, null, null, 1,
    null, null, null, null,
  ],
  hihat: [
    null, null, 1, null, null, 1, null, 1, null, null, 1, null,
    1, null, 1, null,
  ],
  tom:[...BEATS_8],
} as const satisfies Partial<TBeatsRecord>;
