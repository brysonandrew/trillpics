import { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { InputsSelect } from "~/components/inputs/select";
import * as Select from "@radix-ui/react-select";

export const NodesOscillatorDropdowns: FC<
  Pick<Select.SelectProps, 'onValueChange'>
> = (props) => {

  return (
    <InputsSelect
      name="type"
      title="type"
      placeholder="oscillator type"
      // defaultValue={
      //   (audio.graph.refs[id] as any)
      //     .node.type
      // }
      values={WRITABLE_OSCILLATOR_TYPES}
      // onValueChange={handleValueChange}
      {...props}
    />
  );
};
