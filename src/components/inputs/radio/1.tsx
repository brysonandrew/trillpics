import {
  RadioGroupContextValue,
  RadioGroup,
  RadioGroupItem,
} from "@radix-ui/react-radio-group";
import { FC } from "react";
import { kebabToTitle } from "~/utils/format";

type TProps = Pick<
  RadioGroupContextValue,
  "value" | "onValueChange"
> & {
  ranges: string[];
};
export const InputsRadio: FC<TProps> = ({
  value,
  onValueChange,
  ranges,
  ...props
}) => {
  return (
    <RadioGroup
      className="py-0.25"
      value={value}
      onValueChange={onValueChange}
    >
      {ranges.map(
        (value) => (
          <RadioGroupItem
            key={value}
            value={value}
          >
            {kebabToTitle(value)}
          </RadioGroupItem>
        )
      )}
    </RadioGroup>
  );
};
