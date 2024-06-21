import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";

export const SynthGain: FC = () => {
  return (
    <UiInputsSliderRow
      name="synth.gain"
      title="gain"
      min={0}
      max={8}
      step={0.1}
    />
  );
};
