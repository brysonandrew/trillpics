import type { FC } from "react";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { useSynthUpdate } from "~/pages/video/music/synth/update";
import { useTrillPicsStore } from "~/store/middleware";

export const VideoMusicSynthAdsr: FC =
  () => {
    const { synth } = useTrillPicsStore(
      ({ synth }) => ({ synth })
    );
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();
    return (
      <>
        <UiInputsSliderRow
          name="synth.attack"
          title="attack"
          value={synth.attack}
          min={0}
          max={10}
          step={0.1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="synth.decay"
          title="decay"
          value={synth.decay}
          min={0}
          max={10}
          step={0.1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="synth.delay"
          title="delay"
          value={synth.delay}
          min={0}
          max={6}
          step={0.1}
          onUpdate={handleUpdate}
        />
      </>
    );
  };
