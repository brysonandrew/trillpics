import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import {
  ALL_PARAMS,
  MODULATOR_PARAMS,
} from "~/pages/video/music/modulators/constants";
import { TOscillatorParams } from "~/pages/video/music/synth/nodes/oscillator/types";
import { TBitcrusherParams } from "~/pages/video/music/synth/nodes/bitcrusher/types";
import { TKarplusStrongParams } from "~/pages/video/music/synth/nodes/karplus/types";

export type TModulatorParams =
  typeof MODULATOR_PARAMS;
export type TModulatorParamKey =
  TModulatorParams[number];

export type TAllParamsKey =
  (typeof ALL_PARAMS)[number];

export type TModulatorNumberParams = [
  [
    "frequency",
    AudioParam,
    TUpdateNumberHandler
  ],
  [
    "gain",
    AudioParam,
    TUpdateNumberHandler
  ]
];

export type TAllParams = [
  ...TKarplusStrongParams,
  ...TBitcrusherParams,
  ...TOscillatorParams,
  [
    "gain",
    AudioParam,
    TUpdateNumberHandler
  ]
];
