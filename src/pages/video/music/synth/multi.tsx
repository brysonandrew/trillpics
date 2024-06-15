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
      synth
    } = useTrillPicsStore(
      ({ synth }) => ({ synth })
    );
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();

    return (
      <>
        <UiInputsSliderRow
          name="synth.spread"
          title="spread"
          value={synth.spread}
          min={0}
          max={99}
          step={1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="synth.count"
          title="count"
          value={synth.count}
          min={1}
          max={99}
          step={1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="synth.stagger"
          title="stagger"
          value={synth.stagger}
          min={0}
          max={2}
          step={0.001}
          onUpdate={handleUpdate}
        />
      </>
    );
  };
