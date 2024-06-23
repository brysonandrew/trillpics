import { useRef, type FC } from "react";
import {
  TClassValueProps,
  TTitleProps,
} from "@brysonandrew/config-types";
import { SliderStyled } from "~/components/inputs/slider/styled";
import { SliderRow } from "~/components/inputs/slider/row";
import {
  TSliderRef,
  TSliderStyledProps,
  TUpdateSliderHandlerProps,
  TValueChangeHandler,
} from "~/components/inputs/slider/types";

export type TUpdateSliderHandler = (
  value: number
) => void;
export type TSliderUncontrolledProps =
  TSliderStyledProps &
    TClassValueProps &
    TTitleProps &
    TUpdateSliderHandlerProps;
export const SliderUncontrolled: FC<
  TSliderUncontrolledProps
> = ({ onUpdate, ...props }) => {
  const ref = useRef<TSliderRef>(null);

  const onValueChange: TValueChangeHandler =
    ([value]) => {
      if (onUpdate) {
        onUpdate(value);
      }
    };

  return (
    <SliderRow {...props}>
      <SliderStyled
        ref={ref}
        onValueChange={onValueChange}
        {...props}
      />
    </SliderRow>
  );
};
