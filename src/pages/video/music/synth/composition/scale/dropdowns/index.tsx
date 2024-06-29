import type { FC } from "react";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { MusicScaleKey } from "~/pages/video/music/synth/composition/scale/dropdowns/key";
import { MusicScalePattern } from "~/pages/video/music/synth/composition/scale/dropdowns/pattern";

export const MusicScaleDropdowns: FC = () => {
  return (
    <>
      <NodesTemplate
        title="scale"
        Input={MusicScaleKey}
      />
      <NodesTemplate
        title="pattern"
        Input={MusicScalePattern}
      />
    </>
  );
};
