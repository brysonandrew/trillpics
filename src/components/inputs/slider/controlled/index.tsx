import { type FC } from "react";
import {
  TClassValueProps,
  TTitleProps,
} from "@brysonandrew/config-types";
import {
  TSliderControllerProps,
  useSliderController,
} from "~/components/inputs/slider/controlled/controller";
import { SliderRow } from "~/components/inputs/slider/row";
import { SliderStyled } from "~/components/inputs/slider/styled";
import {
  TSliderStyledProps,
  TUpdateSliderHandlerProps,
} from "~/components/inputs/slider/types";

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
  const controller =
    useSliderController({
      ...props,
    });

  return (
    <SliderRow
      title={title}
      classValue={classValue}
      {...controller}
    >
      <SliderStyled {...props} />
    </SliderRow>
  );
};
