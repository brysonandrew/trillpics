import type { FC } from "react";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { DarkGlass } from "~/pages/video/music/layout/glass/dark";
import { MusicSequenceNumbers } from "~/pages/video/music/synth/composition/sequence/numbers";
import { MusicScale } from "~/pages/video/music/synth/composition/scale";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { MusicScaleDropdowns } from "~/pages/video/music/synth/composition/scale/dropdowns";
import { MusicControlsInputsBpm } from "~/pages/video/music/controls/inputs/bpm";
import { MusicControlsInputsMaster } from "~/pages/video/music/controls/inputs/master";
import { SynthMode } from "~/pages/video/music/synth/mode";

export const MusicSynthComposition: FC =
  () => {
    const {
      width,
      sidebarWidthOffset,
    } = useVideoStyle();
    const Input = () => (
      <>
        <MusicControlsInputsBpm />
        <MusicControlsInputsMaster />
        <MusicScaleDropdowns />
        <MusicSequenceNumbers />
        <SynthMode />

      </>
    );
    return (
      <>
        <div
          className="relative column-stretch w-full"
          style={{
            left: sidebarWidthOffset,
            width:
              width -
              sidebarWidthOffset,
          }}
        >
          <NodesTemplate
            Input={Input}
          />
        </div>
      </>
    );
  };
