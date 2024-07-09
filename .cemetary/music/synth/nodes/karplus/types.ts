import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TNodesOptions } from "~/pages/video/music/synth/nodes/types";
import {
  KARPLUS_KEY,
  KARPLUS_PARAMS,
} from "~/pages/video/music/synth/nodes/karplus/constants";

export type TKarplusKey =
  typeof KARPLUS_KEY;
export type TKarplusParamsKey =
  (typeof KARPLUS_PARAMS)[number];

export type TKarplusOptions =
  TNodesOptions<TKarplusParamsKey>;

export type TKarplusParams = [
  TKarplusParamsKey,
  AudioParam,
  TUpdateNumberHandler
][];

export type TKarplusStrongModulatorParamsConfig =
  {
    type: typeof KARPLUS_KEY;
    params: TKarplusParams;
  };
