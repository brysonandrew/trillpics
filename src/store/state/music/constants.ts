import { TSynthTone } from "~/hooks/sound/midis/synth/types";

export const MUSIC_TYPES = ["beat" , "midi"] as const


export const SYNTH_TONE_LOOKUP: Record<
  TSynthTone,
  OscillatorType
> = {
  brutal: "square",
  rough: "sawtooth",
  gentle: "sine",
  soft: "triangle",
};
