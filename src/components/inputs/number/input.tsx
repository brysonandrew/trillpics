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
import { THEME_FONT_SIZES_LOOKUP } from "~uno/index";
import { ARMSTRONG3_FULL_FONT_FAMILY } from "~uno/presets/fonts";
const NUMBER_FONT_SIZE =
  "xxxs" as const;
const [fontSize, lineHeight] =
  THEME_FONT_SIZES_LOOKUP[
    NUMBER_FONT_SIZE
  ];
const paddingLeft = 10;
const paddingRight = 5;
const minWidth =
  40 + paddingLeft + paddingRight;
const maxWidth = 80;
type TProps = TInputProps & {
  name: string;
  onUpdate(value: number): string;
};
export const NumberInput: FC<
  TProps
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
        .fontSize || fontSize;
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
        "text-center font-slab",
        "bg-black-02 backdrop-blur-lg",
        "row border border-white-02 bg-black-02",
        "border border-white-02 _bi-mesh"
      )}
      style={{
        fontSize,
        minWidth,
        maxWidth,
        ...style,
      }}
      onChange={handleInputChange}
      {...props}
    />
  );
};
