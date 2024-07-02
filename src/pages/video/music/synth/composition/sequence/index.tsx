import type { FC } from "react";
import { MusicSequenceNumbers } from "~/pages/video/music/synth/composition/sequence/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
export const MusicSequence: FC = () => {
  return (
    <NodesTemplate Input={MusicSequenceNumbers}/>
  );
};
