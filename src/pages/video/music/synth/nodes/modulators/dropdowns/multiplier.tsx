import { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import * as Select from "@radix-ui/react-select";

const VALUES = [
  "10000",
  "1000",
  "100",
  "10",
  "2",
  "1",
  "0.5",
  "0.1",
  "0.01",
  "0.001",
  "0.0001",
  "0.00001",
] as const;
export type TMultiplierValue = typeof VALUES[number]

type TProps = Select.SelectProps;
export const ModulatorsDropdownsMultiplier: FC<
  TProps
> = (props) => {
  return (
    <InputsSelect
      title="multiplier"
      placeholder="multiplier"
      values={VALUES}
      {...props}
    />
  );
};
