import { type FC } from "react";
import { TClassValueProps } from "@brysonandrew/config-types";
import {
  InputsSliderInput,
  TSliderProps,
} from "~/components/inputs/select/slider/input";

type TProps = TSliderProps &
  TClassValueProps;
export const UiInputsSliderRow: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <div
      className="flex items-center justify-center"
    >
      <InputsSliderInput {...props} />
    </div>
  );
};
