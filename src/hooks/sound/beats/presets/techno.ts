import { TPurcussionRecord } from "~/hooks/sound/beats/types";

export const PRESETS_TECHNO = {
  kick: [
    1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1,
    0, 1, 0, 0,
  ],
  snare: [
    1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 0,
  ],
  cymbal: [
    0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0,
    1, 0, 1, 0,
  ],
} as const satisfies Partial<TPurcussionRecord>;
