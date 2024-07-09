
export const SYNTH_MODES = [
  "isolated",
  "continuous",
] as const;

export type TSynthModeKey =
  typeof SYNTH_MODES[number];
