import type { FC } from "react";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { useSynthUpdate } from "~/pages/video/music/synth/update";
import { useTrillPicsStore } from "~/store/middleware";

export const VideoMusicSynthMulti: FC =
  () => {
    const {
      multi
    } = useTrillPicsStore(
      ({ multi }) => ({ multi })
    );
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();

    return (
      <>
        <UiInputsSliderRow
          name="multi.spread"
          title="spread"
          value={multi.spread}
          min={0}
          max={200}
          step={1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="multi.count"
          title="count"
          value={multi.count}
          min={1}
          max={280}
          step={1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="multi.stagger"
          title="stagger"
          value={multi.stagger}
          min={0}
          max={2}
          step={0.01}
          onUpdate={handleUpdate}
        />
      </>
    );
  };
