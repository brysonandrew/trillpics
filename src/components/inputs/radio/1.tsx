import { FC } from "react";
import {
  RadioGroupContextValue,
} from "@radix-ui/react-radio-group";
import { kebabToTitle } from "~/utils/format";
import { RadioGroup, RadioGroupItem } from "~/components/inputs/radio";

type TProps = RadioGroupContextValue & {
  ranges: readonly string[];
};
export const InputsRadio: FC<
  TProps
> = ({
  value,
  onValueChange,
  ranges,
  ...props
}) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={onValueChange}
      {...props}
    >
      {ranges.map((value) => (
        <RadioGroupItem
          key={value}
          value={value}
        >
          {kebabToTitle(value)}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
};
