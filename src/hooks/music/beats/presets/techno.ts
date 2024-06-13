import { BEATS_8 } from "~/constants/music/beats";
import { TPurcussionRecord } from "~/hooks/music/beats/types";

export const PRESETS_TECHNO = {
  kick: [
    1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1,
    0, 1, 0, 0,
  ],
  snare: [
    1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 0,
  ],
  hihat: [
    0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0,
    1, 0, 1, 0,
  ],
  tom:[...BEATS_8],
} as const satisfies Partial<TPurcussionRecord>;
