import type { FC } from "react";
import { MusicScaleDropdowns } from "~/pages/video/music/synth/composition/scale/dropdowns";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export const MusicScale: FC = () => {
  return (
    <NodesTemplate
      // title="scale"
      Input={MusicScaleDropdowns}
    />
  );
};
