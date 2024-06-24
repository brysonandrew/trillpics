import type { FC } from "react";
import {
  SliderControlled,
} from "~/components/inputs/slider/controlled";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const BeatsMaster: FC = () => {
  const { beatsMaster } =
    useContextMusicInit();
  const { set } = useTrillPicsStore(
    ({ set }) => ({
      set,
    })
  );

  const handleUpdate: TUpdateNumberHandler =
    (value) => {
      const next = Number(value);
      beatsMaster.gain.value = next;
      set((draft: TState) => {
        draft.beats.gain = next;
      });
    };

  return (
    <SliderUncontrolled
      // name="beats.gain"
      title="gain"
      min={0}
      max={2}
      step={0.01}
      onUpdate={handleUpdate}
    />
  );
};
