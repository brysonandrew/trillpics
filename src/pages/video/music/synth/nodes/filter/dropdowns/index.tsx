import { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { BIQUAD_FILTER_TYPES } from "~/pages/video/music/synth/nodes/filter/constants";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const NodesFilterDropdowns: FC<
  TUpdateNodeHandlerProps<'type', BiquadFilterType>
> = (props) => {
console.log(props)
  const handleValueChange = (
    value: BiquadFilterType
  ) => {
    props.onUpdate?.("type", value);
    // audio.graph.refs[id].type = value;
  };
  return (
    <InputsSelect
      name="type"
      title="type"
      placeholder="filter type"
      defaultValue={
        props.defaultValue?.("type")

        // audio.graph.refs[id].type
      }
      values={BIQUAD_FILTER_TYPES}
      onValueChange={handleValueChange}
    />
  );
};
