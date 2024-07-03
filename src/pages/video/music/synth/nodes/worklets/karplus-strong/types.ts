import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TNodesOptions } from "~/pages/video/music/synth/nodes/types";
import { KARPLUS_STRONG_PARAMS } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/constants";
import { KARPLUS_STRONG_KEY } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/numbers";

export type TKarplusStrongOptionsKey =
  (typeof KARPLUS_STRONG_PARAMS)[number];

export type TKarplusStrongOptions =
  TNodesOptions<TKarplusStrongOptionsKey>;

export type TKarplusStrongParams = [
  TKarplusStrongOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];

export type TKarplusStrongModulatorParamsConfig =
  {
    type: typeof KARPLUS_STRONG_KEY;
    params: TKarplusStrongParams;
  };
