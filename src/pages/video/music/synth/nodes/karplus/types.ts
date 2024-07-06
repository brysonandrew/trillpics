import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TNodesOptions } from "~/pages/video/music/synth/nodes/types";
import {
  KARPLUS_KEY,
  KARPLUS_STRONG_PARAMS,
} from "~/pages/video/music/synth/nodes/karplus/constants";

export type TKarplusKey =
  typeof KARPLUS_KEY;
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
    type: typeof KARPLUS_KEY;
    params: TKarplusStrongParams;
  };
