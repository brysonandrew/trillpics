import { STEPS } from "~/constants/music/timing";

const resolveBeats = (
  stagger: number,
  offset = 0
) =>
  [...STEPS].map((_, index) =>
    (index + offset) % stagger === 0
      ? 1
      : null
  );

export const BEATS_1 = resolveBeats(1);

export const BEATS_2 = resolveBeats(2);
export const BEATS_2_1 = resolveBeats(
  2,
  1
);
export const BEATS_4 = resolveBeats(4);
export const BEATS_4_2 = resolveBeats(
  4,
  2
);
export const BEATS_4_4 = resolveBeats(
  4,
  4
);
export const BEATS_8 = resolveBeats(8);
export const BEATS_8_1 = resolveBeats(
  8,
  1
);
export const BEATS_8_4 = resolveBeats(
  8,
  4
);

export const resolveBeatsFromIndicies = (
  indicies: number[]
) =>
  [...STEPS].map((_, index) =>
    indicies.includes(index) ? 1 : null
  );
