import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TNodesOptions } from "~/pages/video/music/synth/nodes/types";
import { NOISE_PARAMS } from "~/pages/video/music/synth/nodes/noise/constants";
import { TNoiseKey } from "~/pages/video/music/_context/refs/audio/noises/types";

export type TNoiseParamKey =
  (typeof NOISE_PARAMS)[number];

export type TNoiseNumberOptions =
  TNodesOptions<TNoiseParamKey>;

export type TNoiseParam = [
  TNoiseParamKey,
  
  AudioParam,
  TUpdateNumberHandler
];

export type TNoiseParams =
  readonly TNoiseParam[];

export type TNoiseModulatorParamsConfig =
  {
    type: TNoiseKey;
    params: TNoiseParams;
  };
