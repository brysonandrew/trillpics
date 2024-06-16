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
    offset,
    delay,
    key,
    ...scale
  } = config;
  const scaleMidis = SCALE_RECORD[key];
  let delayCount = 0;

  return beats.reduce(
    (
      a: TMidiValue[],
      beat: number | null,
      index,
      { length: count }
    ) => {
      const v = resolveMidiValue({
        index,
        count,
        scaleMidis,
        ...config,
      });
      if (
        beat === null ||
        delayCount > 0
      ) {
        delayCount--;
        a.push(null);
        return a;
      }
      if (beat === 1) {
        if (index % interval === 0) {
          delayCount = delay;

          // const repeats =
          //   `${v}|`.repeat(repeat);
          // a = [
          //   ...a,
          //   ...repeats
          //     .split("|")
          //     .filter(Boolean)
          //     .map(Number),
          // ];
          a.push(v);

          return a;
        } else {
          const prev = a[index - 1];
          a.push(prev ?? v);
          return a;
        }
      }
      a.push(null);
      return a;
    },
    []
  );
}