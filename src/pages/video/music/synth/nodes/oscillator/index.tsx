import type { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { NodesOscillatorDropdowns } from "~/pages/video/music/synth/nodes/oscillator/dropdowns";
import { NodesOscillatorNumbers } from "~/pages/video/music/synth/nodes/oscillator/numbers";
import { TOscillatorNumberOptionsKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import * as Select from "@radix-ui/react-select";

type TProps = {
  numbers: TUpdateNodeHandlerProps<TOscillatorNumberOptionsKey>;
  dropdowns: Pick<
    Select.SelectProps,
    "onValueChange"
  >;
};
export const NodesOscillator: FC<
  TProps
> = ({
  numbers,
  dropdowns,
}) => {
  return (
    <NodesTemplate title={"oscillator"}>
      <NodesOscillatorDropdowns
        {...dropdowns}
      />
      <NodesOscillatorNumbers
        {...numbers}
      />
    </NodesTemplate>
  );
};
