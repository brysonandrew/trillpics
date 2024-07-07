import { FC } from "react";
import { InputsSelect, TInputsSelectProps } from "~/components/inputs/select";

const VALUES = [
  "10000",
  "1000",
  "250",
  "100",
  "60",
  "10",
  "2",
  "1",
  "0.5",
  "0.2",
  "0.1",
  "0.01",
  "0.001",
  "0.0001",
  "0.00001",
  "0.000001",
] as const;
export type TMultiplierValue =
  (typeof VALUES)[number];

type TProps = TInputsSelectProps;
export const ModulatorsDropdownsMultiplier: FC<
  TProps
> = (props) => {
  return (
    <InputsSelect
      title={
        <span className="flex gap-1">
          depth
          <span>𓆟</span>
        </span>
      }
      placeholder="multiplier"
      values={VALUES}
      s="sm"
      {...props}
    />
  );
};
