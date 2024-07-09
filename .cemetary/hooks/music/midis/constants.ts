import { resolveObjectKeys } from "~/utils/object";

export const MIDI_RECORD = {
  synth: "synth",
} as const;

export const MIDIS_KEYS =
  resolveObjectKeys(MIDI_RECORD);

