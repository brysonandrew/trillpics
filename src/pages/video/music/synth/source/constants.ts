
export const SYNTH_SOURCES = [
  "oscillator",
  "strings",
] as const;

export type TSynthSourceKey =
  typeof SYNTH_SOURCES[number];
