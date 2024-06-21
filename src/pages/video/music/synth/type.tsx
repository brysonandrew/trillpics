import type { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { SelectStyled } from "~/components/inputs/select/styled";

export const SynthType: FC = () => {
  const handleValueChange =console.log
  return (
    <SelectStyled
      name="synth.type"
      title="type"
      values={WRITABLE_OSCILLATOR_TYPES}
      onValueChange={handleValueChange}
    />
  );
};
