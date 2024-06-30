import type { FC } from "react";
import { NodesOscillatorDropdowns } from "~/pages/video/music/synth/nodes/oscillator/dropdowns";
import { NodesOscillatorNumbers } from "~/pages/video/music/synth/nodes/oscillator/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export const NodesOscillator: FC<{title:JSX.Element}> =
  ({title}) => {
    return (
      <NodesTemplate
        title={title}
        Input={NodesOscillatorDropdowns}
      >
        <NodesOscillatorNumbers />
      </NodesTemplate>
    );
  };
