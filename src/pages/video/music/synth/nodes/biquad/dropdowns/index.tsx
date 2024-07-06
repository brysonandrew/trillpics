import { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { BIQUAD_FILTER_TYPES } from "~/pages/video/music/synth/nodes/biquad/constants";
import * as Select from "@radix-ui/react-select";

export const NodesBiquadDropdowns: FC<
  Partial<
    Pick<
      Select.SelectProps,
      "onValueChange"|'defaultValue'
    >
  >
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
      placeholder="filter type"
      defaultValue={props.defaultValue}
      values={BIQUAD_FILTER_TYPES}
      onValueChange={handleValueChange}
    />
  );
};
