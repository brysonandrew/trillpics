import type { FC } from "react";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { useSynthUpdate } from "~/pages/video/music/synth/update";
import { useTrillPicsStore } from "~/store/middleware";

export const VideoMusicSynthSingle: FC =
  () => {
    const { synth } = useTrillPicsStore(
      ({ synth }) => ({ synth })
    );
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();
    return (
      <>
        <UiInputsSliderRow
          name="synth.midi"
          title="midi"
          min={0}
          max={100}
          step={1}
          value={synth.midi}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="synth.gain"
          title="gain"
          value={synth.gain}
          min={0}
          max={2}
          step={0.1}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="synth.detune"
          title="detune"
          value={synth.detune}
          min={-2400}
          max={2400}
          step={10}
          onUpdate={handleUpdate}
        />
      </>
    );
  };
