import { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { NodesBiquadDropdowns } from "~/pages/video/music/synth/nodes/biquad/dropdowns";
import { NodesBiquadNumbers } from "~/pages/video/music/synth/nodes/biquad/numbers";
import { TBiquadFilterNumberOptionsKey } from "~/pages/video/music/synth/nodes/biquad/types";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import * as Select from "@radix-ui/react-select";
export const NodesBiquad: FC<{
  numbers: TUpdateNodeHandlerProps<TBiquadFilterNumberOptionsKey>;
  dropdowns: Partial<
    Pick<
      Select.SelectProps,
      "onValueChange"|'defaultValue'
    >
  >;
}> = ({ ...props }) => {
  return (
    <NodesTemplate title="Filter">
      <NodesBiquadDropdowns
        {...props.dropdowns}
      />
      <NodesBiquadNumbers
        {...props.numbers}
      />
    </NodesTemplate>
  );
};
