import {
  BIQUAD_FILTER_OPTIONS,
  BIQUAD_FILTER_TYPES,
  BIQUAD_KEY,
} from "~/pages/video/music/synth/nodes/biquad/constants";

export type TBiquadFilterKey =
  (typeof BIQUAD_FILTER_TYPES)[number];

export type TBiquadFilterOptionsKey =
  keyof typeof BIQUAD_FILTER_OPTIONS;
export type TBiquadFilterParamKey =
  Exclude<
    TBiquadFilterOptionsKey,
    "type"
  >;

export type TBiquadFilterOptions = Pick<
  BiquadFilterOptions,
  TBiquadFilterOptionsKey
>;

export type TBiquadFilterConfig = {
  type: typeof BIQUAD_KEY;
  keys: TBiquadFilterParamKey[];
};
