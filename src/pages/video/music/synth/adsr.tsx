import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";

export const VideoMusicSynthAdsr: FC =
  () => {
    return (
      <>
        <UiInputsSliderRow
          name="synth.attack"
          title="attack"
          min={0}
          max={10}
          step={0.1}
        />
        <UiInputsSliderRow
          name="synth.decay"
          title="decay"
          min={0}
          max={10}
          step={0.1}
        />
        <UiInputsSliderRow
          name="synth.delay"
          title="delay"
          min={0}
          max={6}
          step={0.1}
        />
      </>
    );
  };
