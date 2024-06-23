import { NodesFilterSliders } from "~/pages/video/music/synth/nodes/filter/sliders";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export const NodesFilter = () => {
  return (
    <NodesTemplate title="Filter">
      <NodesFilterSliders />
    </NodesTemplate>
  );
};
