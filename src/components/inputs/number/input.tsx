import {
  ChangeEventHandler,
  FC,
  useEffect,
} from "react";
import clsx from "clsx";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { TInputProps } from "~/types/inputs";
import { isNull } from "~/utils/validation/is/null";
import {
  useMeasureTextWidth,
  TFontWeight,
} from "~/hooks/body-style/measure-text";
import { ARMSTRONG3_FULL_FONT_FAMILY } from "~uno/presets/fonts";
import {
  INPUTS_NUMBER_INPUT_STYLE,
  INPUTS_NUMBER_SLIDER_STYLE,
} from "~/components/inputs/constants";

export type TNumberInputProps =
  TInputProps & {
    name: string;
    onUpdate(value: number): string;
  };
export const NumberInput: FC<
  TNumberInputProps
> = ({
  name,
  onUpdate,
  style,
  ...props
}) => {
  const { layout } = useMusicRefs();
  const handleMeasure =
    useMeasureTextWidth();

  const measureText = (
    content = layout.number[name]
      ?.current.value ?? ""
  ) => {
    if (!content) return;
    const weight = layout.number[name]
      .current.style
      .fontWeight as TFontWeight;
    const size =
      layout.number[name].current.style
        .fontSize ||
      INPUTS_NUMBER_INPUT_STYLE.fontSize;
    const family =
      layout.number[name].current.style
        .fontFamily ||
      ARMSTRONG3_FULL_FONT_FAMILY;

    const weightSizeFamily = {
      weight,
      size,
      family,
    };

    const width = handleMeasure({
      content,
      weightSizeFamily,
    });
    if (isNull(width)) return;
    let nextValue = width;
    if (
      width <
      INPUTS_NUMBER_INPUT_STYLE.minWidth
    ) {
      nextValue =
        INPUTS_NUMBER_INPUT_STYLE.minWidth;
    }
    // if (
    //   width >
    //   INPUTS_NUMBER_INPUT_STYLE.maxWidth
    // ) {
    //   nextValue =
    //     INPUTS_NUMBER_INPUT_STYLE.maxWidth;
    // }
    layout.number[
      name
    ].current.style.width = `${nextValue}px`;
  };

  useEffect(() => {
    measureText();
  }, []);

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement
  > = ({
    currentTarget: { name, value },
  }) => {
    const next = Number(value);
    const strValue = onUpdate(next);
    measureText(strValue);
  };
  return (
    <input
      ref={(instance) => {
        if (isNull(instance)) return;
        layout.update(
          "number",
          name,
          instance
        );
      }}
      type="number"
      className={clsx(
        "inline",
        "appearance-none",
        "box-border",
        "text-left font-slab",
        "bg-black-2",
        "border border-white-02"
      )}
      style={{
        ...INPUTS_NUMBER_INPUT_STYLE,
        ...style,
      }}
      onChange={handleInputChange}
      {...props}
    />
  );
};
