import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { BITCRUSHER_PARAMS } from "~/pages/video/music/synth/nodes/worklets/bitcrusher/constants";

export type TBitcrusherNumberOptionsKey =
  (typeof BITCRUSHER_PARAMS)[number];
export type TBitcrusherParams = [
  TBitcrusherNumberOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];

export type TBitcrusherModulatorParamsConfig =
  {
    type: "bitcrusher";
    params: TBitcrusherParams;
  };
