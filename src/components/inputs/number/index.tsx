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
import { isDefined } from "~/utils/validation/is/defined";

const minWidth = 40;
const maxWidth = 80;
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
    ...rest
  } = props;
  const { name } = props;
  const { layout } = useMusicRefs();

  const handleMeasure =
    useMeasureTextWidth();
  const measureText = (
    content = ""
  ) => {
    if (
      !isDefined(layout.number[name]) ||
      isNull(
        layout.number[name].current
      ) ||
      !layout.number[name].current ||
      !content
    )
      return;
    const weight = layout.number[name]
      .current.style
      .fontWeight as TFontWeight;
    const size =
      layout.number[name].current.style
        .fontSize;
    const family =
      layout.number[name].current.style
        .fontFamily;

    const width = handleMeasure({
      content,
      weightSizeFamily: {
        weight,
        size,
        family,
      },
    });
    if (isNull(width)) return;
    let nextValue = width;
    if (width < minWidth) {
      nextValue = minWidth;
    }
    if (width > maxWidth) {
      nextValue = maxWidth;
    }
    layout.number[
      name
    ].current.style.width = `${nextValue}px`;
  };

  useEffect(() => {
    measureText();
  }, []);

  const updateValues = (
    nextValue: string
  ) => {
    if (
      !layout.number[name].current ||
      !layout.number[name].current
    ) {
      return null;
    }
    if (
      layout.number[name]
        .current instanceof
      HTMLInputElement
    ) {
      layout.number[
        name
      ].current.value = nextValue;
    }
    if (
      layout.slider[name]
        .current instanceof
      HTMLInputElement
    ) {
      layout.slider[
        name
      ].current.value = nextValue;
    }
  };
  const handleUpdate: TUpdateNumberHandler =
    (value: number) => {
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
      measureText(strValue);
      if (onUpdate) {
        onUpdate(nextValue);
      }
    };

  const handleSliderChange: ChangeEventHandler<
    HTMLInputElement
  > = ({
    currentTarget: { name, value },
  }) => {
    handleUpdate(Number(value));
  };

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement
  > = ({
    currentTarget: { name, value },
  }) => {
    const next = Number(value);
    handleUpdate(next);
  };
  const rangeProps = {
    min,
    max,
    step,
  } as const;

  const Info = memo(() => (
    <InputsNumberInfo {...rangeProps} />
  ));

  const Title = memo(() => (
    <InputsBoxTitle>
      {title}
    </InputsBoxTitle>
  ));
  const number = (
    <input
      ref={(instance) => {
        if (isNull(instance)) return;
        layout.update(
          "number",
          props.name,
          instance
        );
        // layout
        //   .number(props.name)
        //   ?.current(current);
      }}
      type="number"
      className={clsx(
        "text-center text-xxs font-slab",
        "bg-black-02 backdrop-blur-lg",
        "row border border-white-02 bg-black-02",
        "border border-white-02 _bi-mesh"
      )}
      style={{
        borderRadius: box.radius.m,
        height: box.m05,
        lineHeight: box.m0625,
        minWidth,
        maxWidth,
        // ...box.py(box.m00625),
        ...box.px(box.m0125),
        paddingLeft: box.m025,
      }}
      title={title}
      onChange={handleInputChange}
      {...rangeProps}
      {...rest}
    />
  );

  const slider = (
    <div
      className="relative h-5 grow _bi-radial opacity"
      style={{
        borderRadius: box.radius.m,
      }}
    >
      <InputsNumberBackground />
      <input
        type="range"
        className={clsx(
          "fill",
          "appearance-none bg-transparent",
          "[&::-webkit-slider-runnable-track]:bg-transparent",
          "[&::-webkit-slider-thumb]:(relative w-4 h-4 rounded-full z-0)",
          "[&::-webkit-slider-thumb]:(_bi-conic-metal appearance-none pointer-cursor)"
        )}
        ref={(instance) => {
          if (isNull(instance)) return;

          layout.update(
            "slider",
            props.name,
            instance
          );
        }}
        title={title ?? ""}
        onChange={handleSliderChange}
        defaultValue={Number(
          props.defaultValue
        )}
        {...rangeProps}
        {...rest}
      />
    </div>
  );

  const _ = {
    Box: InputsNumberBox,
    Header: InputsBox,
    Title,
    number,
    Background: InputsNumberBackground,
    slider,
    Info: Fragment,
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
      {/* <_.Background /> */}
      {/* <_.Info /> */}
    </_.Box>
  );
};
