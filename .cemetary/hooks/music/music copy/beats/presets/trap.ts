import {
  BEATS_2_1,
  BEATS_8_4,
  resolveBeatsFromIndicies,
} from "~/constants/music/beats";
const kick = resolveBeatsFromIndicies([
  0, 6, 10,
]);

const tom = resolveBeatsFromIndicies([
  0, 6, 10,
]);
export const PRESETS_TRAP = {
  kick,
  snare: [...BEATS_8_4],
  hihat: [...BEATS_2_1],
  tom,
};
