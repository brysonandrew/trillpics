import type { FC } from "react";
import { SliderControlled } from "~/components/inputs/slider/controlled";

export const VideoMusicSynthwaveMulti: FC =
  () => {
    return (
      <>
        <SliderControlled
          name="synth.spread"
          title="spread"
          min={0}
          max={8}
          step={0.1}
        />
        <SliderControlled
          name="synth.count"
          title="count"
          min={1}
          max={99}
          step={1}
        />
      </>
    );
  };
