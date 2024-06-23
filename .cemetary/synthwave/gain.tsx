import type { FC } from "react";
import React from "react";
import { SliderControlled } from "../../src/components/inputs/slider/controlled copy";

export const SynthwaveGain: FC = () => {
  return (
    <SliderControlled
      name="synth.gain"
      title="gain"
      min={0}
      max={8}
      step={0.1}
    />
  );
};
