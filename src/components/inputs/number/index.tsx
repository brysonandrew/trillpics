import {
  ChangeEventHandler,
  FC,
  MutableRefObject,
  useEffect,
  useMemo,
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
import "./number.css";

const minWidth = 40;
const maxWidth = 80;
const MIN = 0;
const MAX = 8;
const STEP = 0.1;
export type TInputRangeProps = Record<
  "min" | "max" | "step",
  number
>;
export type TInputsNumberBaseProps =
  TInputRangeProps &
    TTitleProps & {
      defaultValue?: number | string;
    };
type TProps = TInputProps &
  TInputsNumberBaseProps & {
    name: string;
    replacer?: (
      value: number
    ) => string;
    onUpdate: TUpdateNumberHandler;
  };
export const InputsNumber: FC<
  TProps
> = (props) => {
  const {
    min = MIN,
    max = MAX,
    step = STEP,
    replacer = String,
    title,
    onUpdate,
    ...rest
  } = props;
  const inputs = useMemo<{
    slider: MutableRefObject<HTMLInputElement | null>;
    number: MutableRefObject<HTMLInputElement | null>;
  }>(() => {
    return {
      slider: { current: null },
      number: { current: null },
    };
  }, []);
  const handleMeasure =
    useMeasureTextWidth();
  const measureText = (
    content = inputs.number.current
      ?.value
  ) => {
    if (
      !inputs.number.current ||
      !content
    )
      return;
    const weight = inputs.number.current
      .style.fontWeight as TFontWeight;
    const size =
      inputs.number.current.style
        .fontSize;
    const family =
      inputs.number.current.style
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
    inputs.number.current.style.width = `${nextValue}px`;
  };

  useEffect(() => {
    measureText();
  }, []);

  const updateValues = (
    nextValue: string
  ) => {
    if (
      !inputs.number.current ||
      !inputs.slider.current
    ) {
      return null;
    }

    inputs.number.current.value =
      nextValue;

    inputs.slider.current.value =
      nextValue;
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
      console.log(strValue, nextValue);
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

  return (
    <div style={{ gap: box.m0125 }}>
      <InputsBox title={title}>
        <input
          ref={inputs.number}
          type="number"
          className={clsx(
            "text-center bg-black-02 backdrop-blur-lg text-xs font-slab",
            "border border-white-02 _gradient-mesh"
          )}
          style={{
            borderRadius: box.radius.m,
            height: box.m0625,
            lineHeight: box.m0625,
            minWidth,
            maxWidth,
            ...box.px(box.m0125),
          }}
          title={title}
          min={min}
          max={max}
          step={step}
          onChange={handleInputChange}
          {...rest}
        />
      </InputsBox>
      <div className="relative h-5 grow opacity">
        <input
          type="range"
          className={clsx(
            "fill",
            "appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:_gradient-radial [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:(w-4 h-4) [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray"
          )}
          ref={inputs.slider}
          title={title ?? ""}
          style={{ ...box.r.xl }}
          min={min}
          max={max}
          step={step}
          defaultValue={Number(
            props.defaultValue
          )}
          onChange={handleSliderChange}
        />
        <div
          className="fill _gradient-mesh pointer-events-none opacity-90"
          style={{
            ...box.r.xl,
            ...box.ix(-box.m00625),
          }}
        />
      </div>
      <InputsNumberInfo
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};
