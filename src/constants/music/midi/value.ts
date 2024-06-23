import {
  TScaleRecord,
  TScaleKey,
} from "~/constants/scales";
import { TBaseMidiValue } from "~/hooks/music/midis/types";
import { TScaleOptions } from "~/pages/video/music/synth/scale/types";
import { TSequenceOptions } from "~/pages/video/music/synth/sequence/types";

export const RANDOM_MIDI_RANGE = 12;

const resolveRandom = () =>
  Math.floor(
    Math.random() * RANDOM_MIDI_RANGE +
      1
  );

type TResolveValueConfig =
  TScaleOptions &
    TSequenceOptions & {
      index: number;
      count: number;
      scaleNodes: TScaleRecord[TScaleKey];
    };
export const resolveMidiValue = (
  config: TResolveValueConfig
): TBaseMidiValue => {
  const {
    index,
    count,
    scaleNodes,
    delta = 1,
    pattern = "asc",
    interval,
  } = config;
  const progress =
    (index / count) * delta;
  const scaleNodesCount =
    scaleNodes.length;
  const scaleIndex = Math.floor(
    scaleNodesCount * progress
  );
  const ascValue =
    scaleNodes[scaleIndex];
  const descValue =
    scaleNodes[
      scaleNodesCount - scaleIndex - 1
    ];
  switch (pattern) {
    case "asc":
      return ascValue;
    case "desc":
      return descValue;
    case "random":
      return resolveRandom();
    case "alternating":
      return Math.floor(
        index / interval
      ) %
        2 ===
        0
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
