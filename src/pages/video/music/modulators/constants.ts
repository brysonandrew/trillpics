import { DELAY_PARAMS } from "~/pages/video/music/synth/nodes/delay/constants";
import { BIQUAD_FILTER_PARAMS } from "~/pages/video/music/synth/nodes/biquad/constants";
import { GAIN_PARAMS } from "~/pages/video/music/synth/nodes/gain/constants";
import { OSCILLATOR_PARAMS } from "~/pages/video/music/synth/nodes/oscillator/constants";

export const PATHS = {
  CONNECT: {
    d: "M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z",
    viewBox: "0 0 24px 24px",
  },
  DISCONNECT: {
    d: "M279.273,0.593v184.995c0,12.87-10.403,23.273-23.273,23.273s-23.273-10.403-23.273-23.273V0.593 C102.26,12.369,0,121.891,0,255.407c0,141.405,114.618,256,256,256s256-114.595,256-256C512,121.891,409.74,12.369,279.273,0.593z",
    viewBox: "0 0 512px 512px",
  },
} as const;

export const MODULATOR_PARAMS = [
  "frequency",
  "gain",
] as const;

export const ALL_PARAMS = [
  ...OSCILLATOR_PARAMS,
  ...BIQUAD_FILTER_PARAMS,
  ...DELAY_PARAMS,
  ...GAIN_PARAMS,
] as const;
