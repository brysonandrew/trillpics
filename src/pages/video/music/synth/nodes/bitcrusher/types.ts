import { TNodesOptions } from "~/pages/video/music/synth/nodes/types";
import { BITCRUSHER_PARAMS } from "~/pages/video/music/synth/nodes/bitcrusher/constants";

export type TBitcrusherParamsKey =
  (typeof BITCRUSHER_PARAMS)[number];

export type TBitcrusherParams =
  TNodesOptions<TBitcrusherParamsKey>;

export type TBitcrusherModulatorParamsConfig =
  {
    type: "bitcrusher";
    params: TBitcrusherParams;
  };
