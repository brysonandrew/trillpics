import {
  TSynthOptions,
  WRITABLE_OSCILLATOR_TYPES,
} from "react-synthwave";
import { STEPS_COUNT } from "~/constants/music/timing";
import {
  DEFAULT_SCALE_DELTA,
  DEFAULT_SCALE_KEY,
  DEFAULT_SCALE_PATTERN,
} from "~/pages/video/music/_context/init/constants";
import {
  TScaleOptions,
  TSequenceOptions,
} from "~/store/state/music/types";

export const MUSIC_TYPES = [
  "beats",
  "midis",
] as const;

export const DEFAULT_SCALE_OPTIONS: TScaleOptions =
  {
    key: DEFAULT_SCALE_KEY,
    delta: DEFAULT_SCALE_DELTA,
    pattern: DEFAULT_SCALE_PATTERN,
  };

export const DEFAULT_SEQUENCE_OPTIONS: TSequenceOptions =
  {
    offset: 0,
    delay: 0,
    repeat: 1,
    interval: 4,
    duration: 1,
    beats: STEPS_COUNT,
  } as const;

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

export const DEFAULT_SCALE_SLIDER_OPTIONS =
  {
    delta: 1,
  };

export const DEFAULT_MIDIS_SLIDER_OPTIONS =
  {
    gain: 1,
    frequency: 22,
    detune: 0,
    delayTime: 0.99,
  };

export const DEFAULT_MIDIS_OPTIONS = {
  type: "sawtooth" as const,
  ...DEFAULT_MIDIS_SLIDER_OPTIONS,
} as const;

export const DEFAULT_BEATS_SLIDER_OPTIONS =
  {
    gain: 1,
  };

export const DEFAULT_MUSIC_SLIDER_OPTIONS =
  {
    bpm: 80,
    master: 1,
  } as const;

export const SCALE_PATTERNS = [
  "asc",
  "desc",
  "random",
  "hill",
  "valley",
  "alternating",
] as const;
