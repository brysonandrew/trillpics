import type { FC } from "react";
import { NodesOscillatorDropdowns } from "~/pages/video/music/synth/nodes/oscillator/dropdowns";
import { NodesOscillatorNumbers } from "~/pages/video/music/synth/nodes/oscillator/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export const NodesOscillator: FC =
  () => {
    return (
      <NodesTemplate
        title="Oscillator"
        Input={NodesOscillatorDropdowns}
      >
        <NodesOscillatorNumbers />
      </NodesTemplate>
    );
  };
