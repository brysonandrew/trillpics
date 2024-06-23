import type { FC } from "react";
import { SynthReload } from "~/pages/video/music/synth/sequence/buttons/reload";
import { MusicSequenceSliders } from "~/pages/video/music/synth/sequence/sliders";
export const MusicSequence: FC = () => {
  return (
    <div>
      <SynthReload />
      <MusicSequenceSliders />
    </div>
  );
};
