import { FREQUENCY_TITLE } from "~/pages/video/music/synth/nodes/constants";

export const OSCILLATOR_SLIDER_OPTIONS =
  {
    frequency: "frequency",
    detune: "detune",
  };
export const OSCILLATOR_SLIDER_TITLES =
  {
    ...FREQUENCY_TITLE,
    detune: "detune",
  };

export const OSCILLATOR_OPTIONS = {
  type: "type" as const,
  ...OSCILLATOR_SLIDER_OPTIONS,
} as const;
