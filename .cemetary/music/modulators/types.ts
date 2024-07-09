import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { MODULATOR_PARAMS } from "~/pages/video/music/modulators/constants";

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
