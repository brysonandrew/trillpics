import { FC } from "react";
import {
  InputsSelect,
  TBaseInputsSelectProps,
} from "~/components/inputs/select";
import { BIQUAD_FILTER_TYPES } from "~/pages/video/music/synth/nodes/biquad/constants";

export const NodesBiquadDropdowns: FC<
  Partial<TBaseInputsSelectProps>
> = (props) => {
  const handleValueChange = (
    value: BiquadFilterType
  ) => {
    props.onValueChange?.(value);
  };
  return (
    <InputsSelect
      name="type"
      title="type"
      placeholder="filter"
      s="sm"
      defaultValue={props.defaultValue}
      values={BIQUAD_FILTER_TYPES}
      onValueChange={handleValueChange}
    />
  );
};
