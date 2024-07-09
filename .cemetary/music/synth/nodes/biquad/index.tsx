import { FC } from "react";
import { TInputsSelectProps } from "~/components/inputs/select";
import { NodesBiquadDropdowns } from "~/pages/video/music/synth/nodes/biquad/dropdowns";
import { NodesBiquadNumbers } from "~/pages/video/music/synth/nodes/biquad/numbers";
import { TBiquadFilterParamKey } from "~/pages/video/music/synth/nodes/biquad/types";
import { TResolveAudioParamProps } from "~/pages/video/music/types";

export const NodesBiquad: FC<{
  numbers: TResolveAudioParamProps<TBiquadFilterParamKey>;
  dropdowns: Partial<
    Pick<
      TInputsSelectProps,
      "onValueChange" | "defaultValue"
    >
  >;
}> = (props) => {
  return (
    <>
      <NodesBiquadDropdowns
        {...props.dropdowns}
      />
      <NodesBiquadNumbers
        {...props.numbers}
      />
    </>
  );
};
