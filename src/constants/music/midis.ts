import {
  BEATS_1,
  BEATS_2_1,
  BEATS_4_4,
} from "~/constants/music/beats";
import { TBeats } from "~/hooks/music/beats/types";
import { TMidis } from "~/hooks/music/midis/types";

export const RANDOM_MIDI_RANGE  = 12;
const resolveRandom = () =>
  Math.floor((Math.random() * RANDOM_MIDI_RANGE + 1));
export const resolveRandomRange = (
  values: TBeats
): TMidis => {
  let n = resolveRandom();
  return values.map((v, i) =>
    v === 1
      ? i % 4 === 0
        ? (n = resolveRandom())
        : n
      : 0
  );
};
export const MIDIS_1_R =
  resolveRandomRange(BEATS_1);

export const MIDIS_2_1_R =
  resolveRandomRange(BEATS_2_1);
export const MIDIS_4_4_R =
  resolveRandomRange(BEATS_4_4);
