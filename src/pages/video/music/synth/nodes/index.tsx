import type { FC } from "react";
import { ChartsGridStepDotShape } from "~/components/charts/grid/step/dot/shape";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { NodesDelaySliders } from "~/pages/video/music/synth/nodes/delay/sliders";
import { NodesFilter } from "~/pages/video/music/synth/nodes/filter";
import { NodesFilterDropdownsType } from "~/pages/video/music/synth/nodes/filter/dropdowns/type";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { NodesOscillatorDropdownsType } from "~/pages/video/music/synth/nodes/oscillator/dropdowns/type";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const MusicSynthNodes: FC =
  () => {
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();
    return (
      <div className="row">
        <div
          className="relative row-space grow"
          style={{
            left: sidebarWidthOffset,
            ...box.p(box.m0125)
          }}
        >
          <NodesOscillator />
          <LinesHorizontalLight />
          <NodesFilter />
          <LinesHorizontalLight />
          <NodesDelay />
        </div>
      </div>
    );
  };
