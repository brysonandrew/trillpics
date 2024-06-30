import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { ALL_PARAMS, MODULATOR_PARAMS } from "~/pages/video/music/synth/nodes/modulators/constants";
import { TOscillatorParams } from "~/pages/video/music/synth/nodes/modulators/params";

export type TModulatorParams =
  typeof MODULATOR_PARAMS;
export type TModulatorParamKey =
  TModulatorParams[number];

  export type TAllParamsKey  = typeof ALL_PARAMS[number]

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
  ...TOscillatorParams,
  [
    "gain",
    AudioParam,
    TUpdateNumberHandler
  ]
];
