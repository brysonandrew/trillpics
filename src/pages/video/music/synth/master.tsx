import type { FC } from "react";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const MidisMaster: FC = () => {
  const { midisMaster } =
    useMusicInitContext();
  const { set } = useTrillPicsStore(
    ({ set }) => ({
      set,
    })
  );
  const handleUpdate: TUpdateSliderHandler =
    (value) => {
      const next = Number(value);
      midisMaster.gain.value = next;
      set((draft: TState) => {
        draft.midis.gain = next;
      });
    };

  return (
    <UiInputsSliderRow
      name="midis.gain"
      title="gain"
      min={0}
      max={8}
      step={0.1}
      onUpdate={handleUpdate}
    />
  );
};
