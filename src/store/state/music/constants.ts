import {
  TSynthOptions,
  WRITABLE_OSCILLATOR_TYPES,
} from "react-synthwave";
import { DEFAULT_SCALE_KEY } from "~/pages/video/music/_context/init/constants";
import { TMusicOptions } from "~/store/state/music/types";

export const MUSIC_TYPES = [
  "beats",
  "midis",
] as const;

export const DEFAULT_MUSIC_OPTIONS: TMusicOptions =
  {
    offset: 0,
    interval: 0,
    bpm: 80,
    scaleKey: DEFAULT_SCALE_KEY,
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

export const DEFAULT_MULTI_SYNTH_OPTIONS =
  {
    ...DEFAULT_SYNTH_OPTIONS,
    count: 40,
    spread: 4,
    stagger: 0.01,
  };
