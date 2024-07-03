import {
  FC,
  memo,
  PropsWithChildren,
} from "react";
import { InputsBox } from "~/components/inputs/box";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TInputProps } from "~/types/inputs";
import { TTitleProps } from "@brysonandrew/config-types";
import { InputsNumberInfo } from "~/components/inputs/number/info";
import { InputsNumberBox } from "~/components/inputs/number/box";
import { InputsNumberBackground } from "~/components/inputs/number/background";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { InputsBoxTitle } from "~/components/inputs/box/title";
import {
  NumberInput,
  TNumberInputProps,
} from "~/components/inputs/number/input";
import {
  InputsNumberSlider,
  TInputsNumberSliderProps,
} from "~/components/inputs/number/slider";
import { InputsNumberDefault } from "~/components/inputs/number/default";

const MIN = 0;
const MAX = 8;
const STEP = 0.1;
export type TInputRangeProps = Record<
  "min" | "max" | "step",
  number
>;
export type TSliderFc = FC<
  Partial<TInputsNumberSliderProps>
>;
export type TNumberInputFc = FC<
  Partial<TNumberInputProps>
>;
export type TInputsNumberChildrenProps =
  {
    Box: FC<PropsWithChildren>;
    Background: FC;
    Info: FC;
    Header: typeof InputsBox;
    Title: typeof InputsBoxTitle;
    Number: TNumberInputFc;
    Slider: TSliderFc;
  };
export type TInputsNumberBaseProps =
  TInputRangeProps &
    TTitleProps & {
      defaultValue?: number | string;
    };
type TProps = Omit<
  TInputProps,
  "children"
> &
  TInputsNumberBaseProps & {
    name: string;
    replacer?: (
      value: number
    ) => string;
    onUpdate: TUpdateNumberHandler;
    children?(
      props: TInputsNumberChildrenProps
    ): JSX.Element;
  };
export const InputsNumber: FC<
  TProps
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

  return (
    <InputsNumberDefault {..._} />
  );
};
