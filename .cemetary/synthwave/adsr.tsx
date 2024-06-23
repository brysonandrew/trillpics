import type { FC } from "react";
import { SliderControlled } from "~/components/inputs/slider/controlled";

export const VideoMusicSynthwaveAdsr: FC =
  () => {
    return (
      <>
        <SliderControlled
          name="synth.attack"
          title="attack"
          min={0}
          max={10}
          step={0.1}
        />
        <SliderControlled
          name="synth.decay"
          title="decay"
          min={0}
          max={10}
          step={0.1}
        />
        <SliderControlled
          name="synth.delay"
          title="delay"
          min={0}
          max={6}
          step={0.1}
        />
      </>
    );
  };
