import {
  TMultiOptions,
  TSynthOptions,
  WRITABLE_OSCILLATOR_TYPES,
} from "react-synthwave";
import { BEATS_1 } from "~/constants/music/beats";
import {
  DEFAULT_SCALE_DELTA,
  DEFAULT_SCALE_KEY,
  DEFAULT_SCALE_PATTERN,
} from "~/pages/video/music/_context/init/constants";
import {
  TMelodyOptions,
  TMusicOptions,
  TScaleOptions,
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

export const DEFAULT_MELODY_OPTIONS: TMelodyOptions =
  {
    beats: BEATS_1,
    offset: 0,
    interval: 4,
    repeat: 4,
    scale: DEFAULT_SCALE_OPTIONS,
  } as const;


export const DEFAULT_SYNTH_OPTIONS = {
  type: WRITABLE_OSCILLATOR_TYPES[0],
  midi: 28,
  detune: 0,
  gain: 1,
  attack: 0,
  decay: 0,
  delay: 0,
} as const satisfies TSynthOptions;

export const DEFAULT_MULTI_SYNTH_OPTIONS: TMultiOptions =
  {
    count: 40,
    spread: 4,
    stagger: 0.01,
  };

export const SCALE_PATTERNS = [
  "asc",
  "desc",
  "random",
  "hill",
  "valley",
  "alternating",
] as const;
