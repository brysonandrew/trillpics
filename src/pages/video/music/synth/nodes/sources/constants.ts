
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { NOISE_PINK_KEY, WHITE_NOISE } from "~/pages/video/music/_context/refs/audio/noises";

export const SYNTH_SOURCES = [
  OSCILLATOR_KEY,
  KARPLUS_KEY,
  NOISE_PINK_KEY,
  WHITE_NOISE
] as const;

export type TSynthSourceKey =
  (typeof SYNTH_SOURCES)[number];
