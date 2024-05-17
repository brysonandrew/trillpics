import { type FC } from "react";
import { TClassValueProps } from "@brysonandrew/config-types";
import {
  SliderInput,
  TSliderProps,
} from "~/components/slider/input";

type TProps = TSliderProps &
  TClassValueProps;
export const UiInputsSliderRow: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: 400 }}
    >
      <SliderInput {...props} />
    </div>
  );
};
{
  /* <UiInputsSliderValue>{props.value}</UiInputsSliderValue>
    </div> */
}
