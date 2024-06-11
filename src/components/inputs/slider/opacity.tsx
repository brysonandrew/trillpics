import { FC, useState } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";
import { DEFAULT_MIN_MAX_100 } from "~/constants/inputs";

type TProps = {
  defaultValue?: number;
  onValueChange(value: number): void;
};
export const InputsSliderOpacity: FC<
  TProps
> = ({
  defaultValue,
  onValueChange,
}) => {
  defaultValue =
    typeof defaultValue === "number"
      ? defaultValue * 100
      : 100;
  const [value, setValue] =
    useState<number>(defaultValue);
  const handleValueChange = ([
    value,
  ]: any) => {
    setValue(value);
    onValueChange(value);
  };

  return (
    <UiInputsSliderRow
    name={"opacity"}

      classValue="py-0.25"
      value={value}
      onUpdate={(_, value) =>
        handleValueChange([
          Number(value),
        ])
      }
      {...DEFAULT_MIN_MAX_100}
    />
  );
};
