import { TScaleRecord, TScaleKey } from "~/constants/scales";
import { TScaleOptions, TSequenceOptions } from "~/store/state/music/types";
export const RANDOM_MIDI_RANGE = 12;

const resolveRandom = () =>
  Math.floor(
    Math.random() * RANDOM_MIDI_RANGE +
      1
  );

type TResolveValueConfig =
TScaleOptions & TSequenceOptions & {
    index: number;
    count: number;
    scaleMidis: TScaleRecord[TScaleKey];
  };
export const resolveMidiValue = (
  config: TResolveValueConfig
) => {
  const {
    index,
    count,
    scaleMidis,
    delta = 1,
    pattern = "asc",
    interval,
  } = config;
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
      return Math.floor(index/interval) % 2 === 0
        ? ascValue
        : descValue;
    case "hill":
      return progress < 0.5
        ? ascValue * 2
        : descValue * 2;
    case "valley":
      return progress > 0.5
        ? ascValue
        : descValue;
    default:
      return resolveRandom();
  }
};