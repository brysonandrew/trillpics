import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";
import { useTrillPicsStore } from "~/store/middleware";

export const Bpm: FC = () => {
  const { bpm, set } =
    useTrillPicsStore(
      ({ bpm, set }) => ({
        bpm,
        set,
      })
    );
  return (
    <UiInputsSliderRow
      name="bpm"
      title="bpm"
      value={bpm}
      min={40}
      max={140}
      step={1}
      onUpdate={(_, value) =>
        set({ bpm: Number(value) })
      }
    />
  );
};
