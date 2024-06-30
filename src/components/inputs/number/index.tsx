import {
  ChangeEventHandler,
  FC,
  Fragment,
  memo,
  PropsWithChildren,
  useEffect,
} from "react";
import clsx from "clsx";
import { InputsBox } from "~/components/inputs/box";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TInputProps } from "~/types/inputs";
import { box } from "~uno/rules/box";
import { TTitleProps } from "@brysonandrew/config-types";
import {
  TFontWeight,
  useMeasureTextWidth,
} from "~/hooks/body-style/measure-text";
import { isNull } from "~/utils/validation/is/null";
import { InputsNumberInfo } from "~/components/inputs/number/info";
import { InputsNumberBox } from "~/components/inputs/number/box";
import { InputsNumberBackground } from "~/components/inputs/number/background";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { InputsBoxTitle } from "~/components/inputs/box/title";
import { THEME_FONT_SIZES_LOOKUP } from "~uno/index";
import { ARMSTRONG3_FULL_FONT_FAMILY } from "~uno/presets/fonts";
import { NumberInput } from "~/components/inputs/number/input";
import { InputsNumberSlider } from "~/components/inputs/number/slider";

const MIN = 0;
const MAX = 8;
const STEP = 0.1;
export type TInputRangeProps = Record<
  "min" | "max" | "step",
  number
>;
export type TInputsNumberChildrenProps =
  {
    Box: FC<PropsWithChildren>;
    Background: FC;
    Info: FC;
    Header: typeof InputsBox;
    Title: typeof InputsBoxTitle;
    number: JSX.Element;
    slider: JSX.Element;
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
    ...rest
  } = props;
  const { name } = props;
  const { layout } = useMusicRefs();

  const updateValues = (
    nextValue: string
  ) => {
    if (
      !layout.number[name].current ||
      !layout.slider[name].current
    ) {
      return null;
    }
    layout.number[name].current.value =
      nextValue;
    layout.slider[name].current.value =
      nextValue;
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

  const number = (
    <NumberInput
      onUpdate={handleUpdate}
      style={{
        lineHeight: box.m0625,
        borderRadius: box.radius.m,
        height: box.m05,

        ...box.px(box.m0125),
        paddingLeft: box.m025,
        ...style,
      }}
      {...rangeProps}
      {...rest}
    />
  );

  const slider = (
    <InputsNumberSlider
      style={{
        ...style,
      }}
      title={title ?? ""}
      onUpdate={handleUpdate}
      defaultValue={Number(
        props.defaultValue
      )}
      {...rangeProps}
      {...rest}
    />
  );
  const Info = memo(() => (
    <InputsNumberInfo {...rangeProps} />
  ));
  const _ = {
    Box: InputsNumberBox,
    Header: InputsBox,
    Title,
    number,
    Background: InputsNumberBackground,
    slider,
    Info,
  } as const;

  if (children)
    return <>{children(_)}</>;

  return (
    <_.Box>
      <_.Header>
        <_.Title />
        {_.number}
      </_.Header>
      {_.slider}
    </_.Box>
  );
};
