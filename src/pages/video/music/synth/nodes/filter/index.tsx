import { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { NodesFilterDropdowns } from "~/pages/video/music/synth/nodes/filter/dropdowns";
import { NodesFilterNumbers } from "~/pages/video/music/synth/nodes/filter/numbers";
import { TBiquadFilterNumberOptionsKey, TBiquadFilterOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";

export const NodesFilter: FC<{
  numbers: TUpdateNodeHandlerProps<TBiquadFilterNumberOptionsKey>;
  dropdowns: TUpdateNodeHandlerProps<
    "type",
    BiquadFilterType
  >;
}> = ({ ...props }) => {
  return (
    <NodesTemplate
      title="Filter"
      Input={NodesFilterDropdowns}
    >
      <NodesFilterDropdowns
        {...props.dropdowns}
      />
      <NodesFilterNumbers
        {...props.numbers}
      />
    </NodesTemplate>
  );
};
