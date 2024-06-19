import { BEATS_1 } from "~/constants/music/beats";
import { SCALE_RECORD } from "~/constants/scales";
import { TMidiValue } from "~/hooks/music/midis/types";
import {
  TScaleOptions,
  TSequenceOptions,
} from "~/store/state/music/types";
import { resolveMidiValue } from "./value";

type TConfig = TScaleOptions &
  TSequenceOptions;
export const resolveMidiSteps = (
  config: TConfig
) => {
  const {
    beats = BEATS_1,
    repeat,
    interval,
    delay,
    key,
  } = config;
  const scaleMidis = SCALE_RECORD[key];
  let delayCount = 0;
  let value:TMidiValue = null;
  return beats.reduce(
    (
      a: TMidiValue[],
      beat: number | null,
      index,
      { length: count }
    ) => {
      if (index % interval === 0) {
        delayCount = delay;
         const nextMidi = resolveMidiValue({
          index,
          count,
          scaleMidis,
          ...config,
        });
        value = [...Array(repeat)].map(
          () => nextMidi
        );
        // a.push(next);

        // return a;
      }
      if (
        beat === null ||
        delayCount > 0
      ) {
        delayCount--;
        return [...a, null];
      }
      return [...a, value];
    },
    []
  );
};
