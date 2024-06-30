import { NodesFilterDropdowns } from "~/pages/video/music/synth/nodes/filter/dropdowns";
import { NodesFilterNumbers } from "~/pages/video/music/synth/nodes/filter/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export const NodesFilter = () => {
  return (
    <NodesTemplate
      title="Filter"
      Input={NodesFilterDropdowns}
    >
      <NodesFilterNumbers />
    </NodesTemplate>
  );
};
