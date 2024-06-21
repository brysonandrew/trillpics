import type { FC } from "react";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { useTrillPicsStore } from "~/store/middleware";

export const VideoMusicSynthMulti: FC =
  () => {
    const { synth } = useTrillPicsStore(
      ({ synth }) => ({ synth })
    );

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
