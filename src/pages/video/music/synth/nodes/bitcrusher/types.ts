import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TNodesOptions } from "~/pages/video/music/synth/nodes/types";
import { BITCRUSHER_PARAMS } from "~/pages/video/music/synth/nodes/bitcrusher/constants";

export type TBitcrusherNumberOptionsKey =
  (typeof BITCRUSHER_PARAMS)[number];

  export type TBitcrusherNumberOptions =
  TNodesOptions<TBitcrusherNumberOptionsKey>;

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
