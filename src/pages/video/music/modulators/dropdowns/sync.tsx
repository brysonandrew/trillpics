import { FC } from "react";
import { InputsSelect, TInputsSelectProps } from "~/components/inputs/select";

const VALUES = [
  "1/128",
  "1/64",
  "1/32",
  "1/16",
  "1/8",
  "1/6",
  "1/4",
  "1/3",
  "1/2",
  "1/1",
  "2/1",
  "3/1",
  "4/1",
  "6/1",
  "8/1",
  "16/1",
  "32/1",
  "64/1",
  "128/1",
] as const;
export type TSyncValue =
  (typeof VALUES)[number];

type TProps = TInputsSelectProps;
export const ModulatorsDropdownsSync: FC<
  TProps
> = (props) => {
  return (
    <InputsSelect
      title="speed ϟ"
      placeholder="sync"
      s="sm"
      defaultValue={
        VALUES[VALUES.length - 1]
      }
      values={VALUES}
      {...props}
    />
  );
};
