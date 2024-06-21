import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";

export const SynthSingleStagger: FC =
  () => {
    return (
      <UiInputsSliderRow
        name="synth.stagger"
        title="stagger"
        min={0}
        max={0.2}
        step={0.0001}
      />
    );
  };
