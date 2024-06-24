import { SCALE_RECORD } from "~/constants/scales";
import { TMidiValue } from "~/hooks/music/midis/types";
import { TScaleOptions } from "~/pages/video/music/synth/scale/types";
import { TSequenceOptions } from "~/pages/video/music/synth/sequence/types";
import { resolveMidiValue } from "../value";

export type TMidiStepsConfig =
  TScaleOptions & TSequenceOptions;
export const resolveMidiSteps = (
  config: TMidiStepsConfig
) => {
  const {
    beats = 16,
    repeat,
    interval,
    key,
  } = config;
  const scaleNodes = SCALE_RECORD[key];
  let repeatCount = 0;
  let value: TMidiValue = null;
  return [...Array(Math.round(beats))].reduce(
    (
      a: TMidiValue[],
      beat: number | null,
      index,
      { length: count }
    ) => {
      repeatCount =
        repeatCount + repeat;

      if (index % interval === 0) {
        value = resolveMidiValue({
          index,
          count,
          scaleNodes,
          ...config,
        });
      }
      if (
        repeatCount < 1 ||
        beat === null
      ) {
        return [...a, null];
      }

      const nextValues = [
        ...a,
        [
          ...Array(
            Math.floor(repeatCount)
          ),
        ].map(() => value),
      ];

      repeatCount = 0;

      return nextValues;
    },
    []
  );
};
