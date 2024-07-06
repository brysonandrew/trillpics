import { type FC } from "react";
import {
  TClassValueProps,
  TTitleProps,
} from "@brysonandrew/config-types";
import { TSliderControllerProps } from "~/components/inputs/slider/controlled/controller";
import { SliderRow } from "~/components/inputs/slider/row";
import { SliderStyled } from "~/components/inputs/slider/styled";

export type TSliderControlledProps =
  TClassValueProps &
    TTitleProps &
    TSliderControllerProps;
export const SliderControlled: FC<
  TSliderControlledProps
> = ({
  title,
  classValue,
  onUpdate,
  ...props
}) => {
  return (
    <SliderRow
      title={title}
      classValue={classValue}
      // {...controller}
    >
      <SliderStyled {...props} />
    </SliderRow>
  );
};
