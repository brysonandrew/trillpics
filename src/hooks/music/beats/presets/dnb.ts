import {
  BEATS_1,
  resolveBeatsFromIndicies,
} from "~/constants/music/beats";
const kick = resolveBeatsFromIndicies([
  0, 10,
]);
console.log(kick)
const snare = resolveBeatsFromIndicies([
  4, 12,
]);
const tom = resolveBeatsFromIndicies(
  []
);
export const PRESETS_DNB = {
  kick,
  snare,
  hihat: [...BEATS_1],
  tom,
};
