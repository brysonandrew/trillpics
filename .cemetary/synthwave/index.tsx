import type { FC } from "react";
import { SliderControlled } from "~/components/inputs/slider/controlled";

export const VideoMusicSynthwaveSingle: FC =
  () => {
    return (
      <>
        <SliderControlled
          name="synth.midi"
          title="midi"
          min={0}
          max={100}
          step={1}
        />

        <SliderControlled
          name="synth.detune"
          title="detune"
          min={-2400}
          max={2400}
          step={10}
        />
      </>
    );
  };
