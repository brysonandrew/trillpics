import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";

export const VideoMusicSynthSingle: FC =
  () => {
    return (
      <>
        <UiInputsSliderRow
          name="synth.midi"
          title="midi"
          min={0}
          max={100}
          step={1}
        />

        <UiInputsSliderRow
          name="synth.detune"
          title="detune"
          min={-2400}
          max={2400}
          step={10}
        />
      </>
    );
  };
