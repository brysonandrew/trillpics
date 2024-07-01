import { SCALE_VALUE_COUNT } from "~/constants/scales";
import {
  TMidiValue,
  TMidiValues,
} from "~/hooks/music/midis/types";
import { midiValueToNumber } from "~/utils/music/midi";

export const handleRescale = (
  currSteps: TMidiValues,
  scaleSteps: TMidiValues
) => {
  const nextSteps = currSteps.map(
    (midiValue: TMidiValue) => {
      if (midiValue === null)
        return null;

      const resolveIndex = (
        offset = 0
      ) =>
        scaleSteps.findIndex(
          (step) =>
            midiValueToNumber(step) ===
            (midiValueToNumber(
              midiValue
            ) +
              offset) %
              SCALE_VALUE_COUNT
        );

      let offset = 0;
      const inc = 1;

      let next: TMidiValue =
        resolveIndex();
      let max = 0;
      while (next < 0 && max < 100) {
        console.log(
          "offset - ",
          offset
        );
        const resultIndex =
          resolveIndex(offset);
        if (resultIndex > -1) {
          next =
            scaleSteps[resultIndex];
          break;
        }
        if (offset >= 0) {
          offset++;
        }
        offset *= inc;
        max++;
      }
      console.log(
        `from ${midiValue} -> to ${next}`
      );
      return next;
    }
  );
  return nextSteps;
};
