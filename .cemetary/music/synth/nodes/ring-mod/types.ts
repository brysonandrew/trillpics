import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { RING_MOD_PARAMS } from "~/pages/video/music/synth/nodes/ring-mod/constants";
import { TNodesOptions } from "~/pages/video/music/synth/nodes/types";

export type TRingModNumberOptionsKey =
  (typeof RING_MOD_PARAMS)[number];

  export type TRingModNumberOptions =
  TNodesOptions<TRingModNumberOptionsKey>;

export type TRingModParams = [
  TRingModNumberOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];

export type TRingModModulatorParamsConfig =
  {
    type: "ring-mod";
    params: TRingModParams;
  };

