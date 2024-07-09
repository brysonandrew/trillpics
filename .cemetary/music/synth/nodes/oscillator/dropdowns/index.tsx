import { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import {
  InputsSelect,
  TInputsSelectProps,
} from "~/components/inputs/select";

export const NodesOscillatorDropdowns: FC<
  Partial<
    Pick<
      TInputsSelectProps,
      "onValueChange"
    >
  >
> = (props) => {
  return (
    <InputsSelect
      name="type"
      title="type"
      placeholder="waveform"
      values={WRITABLE_OSCILLATOR_TYPES}
      {...props}
    />
  );
};
