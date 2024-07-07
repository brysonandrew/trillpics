import { FC, memo } from "react";
import { InputsBox } from "~/components/inputs/box";
import { InputsNumberInfo } from "~/components/inputs/number/info";
import { InputsNumberBox } from "~/components/inputs/number/box";
import { InputsNumberBackground } from "~/components/inputs/number/background";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { InputsBoxTitle } from "~/components/inputs/box/title";
import { NumberInput } from "~/components/inputs/number/input";
import { InputsNumberSlider } from "~/components/inputs/number/slider";
import { InputsNumberDefault } from "~/components/inputs/number/default";
import {
  TInputsNumberProps,
  TNumberInputFc,
  TSliderFc,
} from "~/components/inputs/number/types";

const MIN = 0;
const MAX = 8;
const STEP = 0.1;

export const InputsNumber: FC<
  TInputsNumberProps
> = ({ children, ...props }) => {
  const {
    min = MIN,
    max = MAX,
    step = STEP,
    replacer = String,
    title,
    onUpdate,
    style,
    classValue,
    ...rest
  } = props;
  const { name } = props;
  const { layout } = useMusicRefs();

  const updateValues = (
    nextValue: string
  ) => {
    if (layout.number[name]?.current) {
      layout.number[
        name
      ].current.value = nextValue;
    }

    if (layout.slider[name]?.current) {
      layout.slider[
        name
      ].current.value = nextValue;
    }
  };
  const handleUpdate = (
    value: number
  ) => {
    let nextValue = value;
    if (value < min) {
      nextValue = min;
    }
    if (value > max) {
      nextValue = max;
    }
    const strValue =
      replacer(nextValue);
    updateValues(strValue);
    if (onUpdate) {
      onUpdate(nextValue);
    }
    return strValue;
  };

  const rangeProps = {
    min,
    max,
    step,
  } as const;

  const Title = memo(() => (
    <InputsBoxTitle>
      {title}
    </InputsBoxTitle>
  ));

  const Number: TNumberInputFc = (
    numberSlider
  ) => (
    <NumberInput
      onUpdate={handleUpdate}
      style={{
        ...style,
      }}
      {...rangeProps}
      {...rest}
      {...numberSlider}
    />
  );

  const Slider: TSliderFc = ({
    defaultValue,
    ...sliderProps
  }) => (
    <InputsNumberSlider
      title={title ?? ""}
      onUpdate={handleUpdate}
      defaultValue={props.defaultValue}
      {...rangeProps}
      {...rest}
      {...sliderProps}
    />
  );
  const Info = memo(() => (
    <InputsNumberInfo {...rangeProps} />
  ));
  const _ = {
    Box: InputsNumberBox,
    Header: InputsBox,
    Title,
    Number,
    Background: InputsNumberBackground,
    Slider,
    Info,
  } as const;

  if (children)
    return <>{children(_)}</>;

  return <InputsNumberDefault {..._} />;
};
