import { WRITABLE_OSCILLATOR_TYPES, TSynthOptions } from "react-synthwave";

export const DEFAULT_SYNTH_SLIDER_OPTIONS =
  {
    midi: 28,
    detune: 0,
    gain: 1,
    attack: 0,
    decay: 0,
    delay: 0,
  };

export const DEFAULT_SYNTH_OPTIONS = {
  type: WRITABLE_OSCILLATOR_TYPES[0],
  ...DEFAULT_SYNTH_SLIDER_OPTIONS,
} as const satisfies TSynthOptions;

export const DEFAULT_MULTI_SYNTH_OPTIONS =
  {
    count: 40,
    spread: 0.4,
    stagger: 0,
  } as const;

export type TSynthConfigKey =
  | keyof typeof DEFAULT_MULTI_SYNTH_OPTIONS
  | keyof typeof DEFAULT_SYNTH_SLIDER_OPTIONS;

  import { TScaleKey } from "~/constants/scales";
import { TScalePattern } from "~/pages/video/music/synth/composition/scale/types";

export const DEFAULT_SCALE_KEY: TScaleKey =
  "blues";
export const DEFAULT_SCALE_DELTA = 1;
export const DEFAULT_SCALE_PATTERN: TScalePattern =
  "desc";
