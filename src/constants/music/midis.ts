import {
  BEATS_2_1,
  BEATS_4_4,
} from "~/constants/music/beats";
import { TBeats } from "~/hooks/sound/beats/types";
import { TMidis } from "~/hooks/sound/midis/types";

const resolveRandomRange = (
  values: TBeats
): TMidis =>
  values.map((v) =>
    v === 1
      ? Math.floor(Math.random() * 20) +
        29
      : 0
  );
export const MIDIS_2_1_R =
  resolveRandomRange(BEATS_2_1);
export const MIDIS_4_4_R =
  resolveRandomRange(BEATS_4_4);
