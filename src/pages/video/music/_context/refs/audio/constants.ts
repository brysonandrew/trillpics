import {
  TSynthOptions,
  WRITABLE_OSCILLATOR_TYPES,
} from "react-synthwave";

export const SYNTH_TYPES_RECORD = {
  options: "options",
  multi: "multi",
} as const;
export const MUSIC_OPTIONS_RECORD = {
  bpm: "bpm",
  key: "key",
} as const;

export const INPUT_PATH_DELIMITER = ".";

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
  import { TInputsNumberBaseProps } from "~/components/inputs/number";

  export const FREQUENCY_TITLE = {
    frequency: "Hz",
  } as const;
  
  const FREQUENCY_OVERRIDES = {
    min: 1,
    max: 1200,
    step: 1,
    title: "Hz",
  } as const;
  
  const DELAY_TIME_OVERRIDES = {
    min: -0.00001,
    max: 1,
    step: 0.00001,
  } as const;
  
  const Q_OVERRIDES = {
    min: 0,
    max: 10,
    step: 0.01,
  } as const;
  
  export const INPUTS_NUMBER_OVERRIDES: Record<
    string,
    Partial<TInputsNumberBaseProps>
  > = {
    frequency: FREQUENCY_OVERRIDES,
    delayTime: DELAY_TIME_OVERRIDES,
    Q: Q_OVERRIDES,
  };
  