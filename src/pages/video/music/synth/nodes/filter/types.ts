import { BIQUAD_FILTER_OPTIONS, BIQUAD_FILTER_TYPES } from "~/pages/video/music/synth/nodes/filter/constants";

export type TBiquadFilterKey =
  (typeof BIQUAD_FILTER_TYPES)[number];
export type TBiquadFilterOptionsKey = keyof typeof BIQUAD_FILTER_OPTIONS
export type TBiquadFilterNumberOptionsKey = Exclude<TBiquadFilterOptionsKey, 'type'>

export type TBiquadFilterOptions = Pick<
  BiquadFilterOptions,
  TBiquadFilterOptionsKey
>;
