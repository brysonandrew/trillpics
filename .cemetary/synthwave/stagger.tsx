import type { FC } from "react";
import { SliderControlled } from "~/components/inputs/slider/controlled";

export const SynthwaveSingleStagger: FC =
  () => {
    return (
      <SliderControlled
        name="synth.stagger"
        title="stagger"
        min={0}
        max={0.2}
        step={0.0001}
      />
    );
  };
