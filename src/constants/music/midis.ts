import {
  BEATS_1,
  BEATS_2_1,
  BEATS_4_4,
} from "~/constants/music/beats";
import {
  SCALE_RECORD,
  TScaleKey,
  TScaleRecord,
} from "~/constants/scales";
import {
  TMidis,
  TMutableMidis,
} from "~/hooks/music/midis/types";
import {
  TMelodyOptions,
  TScaleOptions,
} from "~/store/state/music/types";

export const RANDOM_MIDI_RANGE = 12;
const resolveRandom = () =>
  Math.floor(
    Math.random() * RANDOM_MIDI_RANGE +
      1
  );

type TResolveValueConfig = {
  index: number;
  count: number;
  scaleMidis: TScaleRecord[TScaleKey];
  scale: TScaleOptions;
};
const resolveValue = (
  config: TResolveValueConfig
) => {
  const {
    index,
    scale,
    count,
    scaleMidis,
  } = config;
  const { delta, pattern } = scale;
  const progress =
    (index / count) * delta;
  const scaleMidisCount =
    scaleMidis.length;
  const scaleIndex = Math.floor(
    scaleMidisCount * progress
  );
  const ascValue =
    scaleMidis[scaleIndex];
  const descValue =
    scaleMidis[
      scaleMidisCount - scaleIndex - 1
    ];
  switch (pattern) {
    case "asc":
      return ascValue;
    case "desc":
      return descValue;
    case "random":
      return resolveRandom();
    case "alternating":
      return index % 2 === 0
        ? ascValue
        : descValue;
    case "hill":
      return progress < 0.5
        ? ascValue * 2
        : descValue * 2;
    case "valley":
      return progress > 0.5
        ? ascValue * 2
        : descValue * 2;
    default:
      return resolveRandom();
  }
};
type TConfig = Partial<TMelodyOptions>;
export const resolveSynthSteps = ({
  beats = BEATS_1,
  scale = {
    key: "all",
    pattern: "asc",
    delta: 1,
  },
  repeat = 4,
  interval = 4,
}: TConfig): TMidis => {
  const scaleMidis =
    SCALE_RECORD[scale.key];
  return beats.reduce(
    (
      a: TMutableMidis,
      beat: number | null,
      index,
      { length: count }
    ) => {
      const v = resolveValue({
        index,
        count,
        scaleMidis,
        scale,
      });
      if (beat === null) {
        a.push(null);
        return a;
      }
      if (beat === 1) {
        if (index % interval === 0) {
          const repeats =
            `${v}|`.repeat(repeat);
          a = [
            ...a,
            ...repeats
              .split("|")
              .filter(Boolean)
              .map(Number),
          ];
          return a;
        }
        const prev = a[index - 1];
        a.push(prev ?? v);
        return a;
      }
      return a;
    },
    []
  );
};
export const MIDIS_1_R =
  resolveSynthSteps({ beats: BEATS_1 });
export const MIDIS_2_1_R =
  resolveSynthSteps({
    beats: BEATS_2_1,
  });
export const MIDIS_4_4_R =
  resolveSynthSteps({
    beats: BEATS_4_4,
  });
