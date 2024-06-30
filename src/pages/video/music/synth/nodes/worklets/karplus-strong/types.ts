import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { KARPLUS_STRONG_PARAMS } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/constants";

export type TKarplusStrongNumberOptionsKey =
  (typeof KARPLUS_STRONG_PARAMS)[number];

export type TKarplusStrongParams = [
  TKarplusStrongNumberOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];

export type TKarplusStrongModulatorParamsConfig = {
  type: "karplus-strong";
  params: TKarplusStrongParams;
};