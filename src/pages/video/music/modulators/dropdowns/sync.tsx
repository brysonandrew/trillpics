import { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import * as Select from "@radix-ui/react-select";

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

type TProps = Select.SelectProps;
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
