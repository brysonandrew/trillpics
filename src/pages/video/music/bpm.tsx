import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";
import { useSoundContext } from "~/shell/global/sound";

export const Bpm: FC = () => {
  const { bpm, updateBpm } =
    useSoundContext();
  return (
    <UiInputsSliderRow
      name="bpm"
      title="bpm"
      value={bpm}
      min={40}
      max={140}
      step={1}
      onUpdate={(_, value) =>
        updateBpm(Number(value))
      }
    />
  );
};
