import type { FC } from "react";
import { TUpdateSliderHandler, UiInputsSliderRow } from "~/components/inputs/slider/row";
import { useSynthUpdate } from "~/pages/video/music/synth/update";
import { useTrillPicsStore } from "~/store/middleware";

export const SynthSingleStagger: FC = () => {
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  const handleUpdate: TUpdateSliderHandler =
    useSynthUpdate();
  return (
    <UiInputsSliderRow
      name="synth.stagger"
      title="stagger"
      value={synth.stagger}
      min={0}
      max={0.2}
      step={0.0001}
      onUpdate={handleUpdate}
    />
  );
};
