import type { FC } from "react";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const BeatsMaster: FC = () => {
  const { beatsMaster } =
    useMusicInitContext();
  const { set } = useTrillPicsStore(
    ({ set }) => ({
      set,
    })
  );

  const handleUpdate: TUpdateSliderHandler =
    (value) => {
      const next = Number(value);
      beatsMaster.gain.value = next;
      set((draft: TState) => {
        draft.beats.gain = next;
      });
    };

  return (
    <UiInputsSliderRow
      name="beats.gain"
      title="gain"
      min={0}
      max={2}
      step={0.01}
      onUpdate={handleUpdate}
    />
  );
};
