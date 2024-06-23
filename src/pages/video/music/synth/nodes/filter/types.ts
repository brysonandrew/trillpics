import { BIQUAD_FILTER_PARAMS, BIQUAD_FILTER_TYPES } from "~/pages/video/music/synth/nodes/filter/constants";

export type TBiquadFilterKey =
  (typeof BIQUAD_FILTER_TYPES)[number];
export type TBiquadFilterOptionsKey = keyof typeof BIQUAD_FILTER_PARAMS

export type TBiquadFilterOptions = Pick<
  BiquadFilterOptions,
  TBiquadFilterOptionsKey
>;
