import {
  KARPLUS_STRONG_KEY,
  OSCILLATOR_KEY,
} from "~/pages/video/music/synth/nodes/worklets/karplus-strong/numbers";

export const SYNTH_SOURCES = [
  OSCILLATOR_KEY,
  KARPLUS_STRONG_KEY,
] as const;

export type TSynthSourceKey =
  (typeof SYNTH_SOURCES)[number];
