import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { MODULATOR_PARAMS } from "~/pages/video/music/synth/nodes/modulators/constants";
import { TOscillatorParams } from "~/pages/video/music/synth/nodes/modulators/params";

export type TModulatorParams =
  typeof MODULATOR_PARAMS;
export type TModulatorParamKey =
  TModulatorParams[number];

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
