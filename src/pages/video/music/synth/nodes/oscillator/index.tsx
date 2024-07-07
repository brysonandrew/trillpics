import type { FC } from "react";
import { TInputsSelectProps } from "~/components/inputs/select";
import { NodesOscillatorDropdowns } from "~/pages/video/music/synth/nodes/oscillator/dropdowns";
import { NodesOscillatorNumbers } from "~/pages/video/music/synth/nodes/oscillator/numbers";
import { TOscillatorParamKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { TResolveAudioParamProps } from "~/pages/video/music/types";

type TProps = {
  dropdowns: Pick<
  TInputsSelectProps,
    "onValueChange"
  >;
  numbers: TResolveAudioParamProps<TOscillatorParamKey>; // TResolveAudioParamProps
};
export const NodesOscillator: FC<
  TProps
> = ({ dropdowns, numbers }) => {
  return (
    <>
      <NodesOscillatorDropdowns
        {...dropdowns}
      />
      <NodesOscillatorNumbers
        {...numbers}
      />
    </>
  );
};
