import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { TMidiValue } from "~/hooks/music/midis/types";
import { midiValueToNumber } from "~/utils/music/midi";

export const resolveTop = (
  value: TMidiValue,
  size: number
) => {
  if (value === null) return "0px"
  return `calc(${
    (1 -
      (midiValueToNumber(value) + 0.5) /
        SCALE_VALUE_COUNT) *
      90 +
    5
  }% - ${size}px)` as const;
};
