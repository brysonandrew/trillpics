import { FREQUENCY_TITLE } from "~/pages/video/music/synth/nodes/constants";
import { resolveObjectKeys } from "~/utils/object";

export const OSCILLATOR_NUMBER_OPTIONS =
  {
    frequency: "frequency",
    detune: "detune",
  } as const;
export const OSCILLATOR_NUMBER_TITLES =
  {
    ...FREQUENCY_TITLE,
    detune: "detune",
  };

export const OSCILLATOR_OPTIONS = {
  type: "type" as const,
  ...OSCILLATOR_NUMBER_OPTIONS,
} as const;

export const OSCILLATOR_PARAMS =
  resolveObjectKeys(
    OSCILLATOR_NUMBER_OPTIONS
  );
