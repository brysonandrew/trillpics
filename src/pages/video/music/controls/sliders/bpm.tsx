import type { FC } from "react";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { useTrillPicsStore } from "~/store/middleware";

export const MusicControlsSlidersBpm: FC = () => {
  const { bpm, set } =
    useTrillPicsStore(
      ({ bpm, set }) => ({
        bpm,
        set,
      })
    );
  return (
    <SliderUncontrolled
      title="bpm"
      min={40}
      max={140}
      step={1}
      onUpdate={(value) =>
        set({ bpm: Number(value) })
      }
    />
  );
};
