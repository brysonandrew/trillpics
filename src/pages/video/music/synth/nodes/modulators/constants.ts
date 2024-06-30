import { DELAY_PARAMS } from "~/hooks/music/midis/delay";
import { GAIN_PARAMS } from "~/hooks/music/midis/gains";
import { BIQUAD_FILTER_PARAMS } from "~/pages/video/music/synth/nodes/filter/constants";
import { OSCILLATOR_PARAMS } from "~/pages/video/music/synth/nodes/oscillator/constants";

const PARAMS = [
  ...OSCILLATOR_PARAMS,
  ...BIQUAD_FILTER_PARAMS,
  ...DELAY_PARAMS,
  ...GAIN_PARAMS
] as const;

