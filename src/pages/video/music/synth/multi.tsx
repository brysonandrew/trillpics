import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";

export const VideoMusicSynthMulti: FC =
  () => {
    return (
      <>
        <UiInputsSliderRow
          name="synth.spread"
          title="spread"
          min={0}
          max={8}
          step={0.1}
        />
        <UiInputsSliderRow
          name="synth.count"
          title="count"
          min={1}
          max={99}
          step={1}
        />
      </>
    );
  };
