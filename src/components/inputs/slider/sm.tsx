import type { FC } from "react";
import { InputsBox } from "~/components/inputs/box";
import { TSliderRowProps } from "~/components/inputs/slider/row";
import { SliderStyled } from "~/components/inputs/slider/styled";

export const SliderSm: FC<
  TSliderRowProps
> = (props) => {
  const {
    children,
    title,
    classValue,
    ...sliderProps
  } = props;
  return (
    <InputsBox title={title}>
      <SliderStyled {...sliderProps} />
    </InputsBox>
  );
};
