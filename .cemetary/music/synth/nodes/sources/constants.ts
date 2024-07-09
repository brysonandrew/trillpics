
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { PINK_NOISE_KEY, WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";

export const SYNTH_SOURCES = [
  OSCILLATOR_KEY,
  KARPLUS_KEY,
  PINK_NOISE_KEY,
  WHITE_NOISE_KEY
] as const;

export type TSynthSourceKey =
  (typeof SYNTH_SOURCES)[number];
