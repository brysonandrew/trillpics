import type { FC } from "react";
import { TUpdateSliderHandler } from "~/components/inputs/slider/types";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";

export const MusicControlsSlidersMaster: FC =
  () => {
    const { master } =
      useContextMusicInit();
    const { set } = useTrillPicsStore(
      ({ set }) => ({
        set,
      })
    );
    const handleUpdate: TUpdateSliderHandler =
      (value) => {
        const next = Number(value);
        master.gain.value = next;
        // set((draft: TState) => {
        //   draft.master = next;
        // });
      };

    return (
      <SliderUncontrolled
        name="master"
        title="gain"
        min={0}
        max={8}
        step={0.1}
        onUpdate={handleUpdate}
      />
    );
  };
