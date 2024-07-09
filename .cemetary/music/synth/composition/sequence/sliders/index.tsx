import type { FC } from "react";
import { SequenceSlider } from "~/pages/video/music/synth/composition/sequence/sliders/slider";
export const MusicSequenceSliders: FC =
  () => {
    return (
      <>
        <SequenceSlider
          optionsKey="beats"
          step={1}
          max={32}
        />
        <SequenceSlider
          optionsKey="interval"
          step={1}
          max={32}
        />
        <SequenceSlider
          optionsKey="duration"
          max={0.2}
        />
        <SequenceSlider
          optionsKey="repeat"
          step={0.2}
        />
      </>
    );
  };
