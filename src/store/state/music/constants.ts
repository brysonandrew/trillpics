import { TSynthOptions, WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";

export const MUSIC_TYPES = [
  "beats",
  "midis",
] as const;

export const DEFAULT_SYNTH_OPTIONS = {
  type: WRITABLE_OSCILLATOR_TYPES[0],
  midi: 28,
  detune: 0,
  gain: 0.4,
  attack: 0.2,
  decay: 0.2,
  delay: 0,
} as const satisfies TSynthOptions;

export const DEFAULT_MULTI_SYNTH_OPTIONS =
  {
    ...DEFAULT_SYNTH_OPTIONS,
    count: 2,
    spread: 0,
    stagger: 0,
  };
