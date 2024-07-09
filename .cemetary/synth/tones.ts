import { TSynthTone } from "~/hooks/music/midis/synth/types";
export const SYNTH_TONE_LOOKUP: Record<
  TSynthTone,
  OscillatorType
> = {
  brutal: "square",
  rough: "sawtooth",
  gentle: "sine",
  soft: "triangle",
};
