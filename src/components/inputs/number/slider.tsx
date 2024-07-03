import type {
  ChangeEventHandler,
  FC,
} from "react";
import { TInputProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { isNull } from "~/utils/validation/is/null";
import { box } from "~uno/rules/box";
import { cx } from "class-variance-authority";
import { INPUTS_NUMBER_SLIDER_STYLE, INPUTS_NUMBER_SLIDER_STYLE_SM } from "~/components/inputs/constants";
import { TInputSizeProps } from "~/components/inputs/number/input";

export type TInputsNumberSliderProps =
  TInputProps &
    TInputSizeProps & {
      name: string;
      onUpdate(value: number): void;
      orient?: "vertical";
    };
export const InputsNumberSlider: FC<
  TInputsNumberSliderProps
> = ({
  name,
  style,
  s = "m",
  onUpdate,
  orient,
  ...props
}) => {
  const isVertical =
    orient === "vertical";
  const { layout } = useMusicRefs();

  const handleSliderChange: ChangeEventHandler<
    HTMLInputElement
  > = ({
    currentTarget: { name, value },
  }) => {
    onUpdate(Number(value));
  };

  return (
    <div
      className={cx(
        "relative grow border-white-02 bg-black-2"
      )}
      style={{
        ...(s=== 'm' ? INPUTS_NUMBER_SLIDER_STYLE : INPUTS_NUMBER_SLIDER_STYLE_SM),
      }}
    >
      <input
        type="range"
        className={clsx(
          "fill",
          "border border-white-01",
          "appearance-none bg-transparent",
          "truncate",
          "[&::-webkit-slider-runnable-track]:_bi-radial",
          "[&::-webkit-slider-thumb]:shadow-[40px_2px_0px_40px_rgba(17,17,17,1)]",
          isVertical
            ? "[&::-webkit-slider-thumb]:(w-2.8 h-1.6)"
            : "[&::-webkit-slider-thumb]:(w-1.6 h-2.8)",
          "[&::-webkit-slider-thumb]:(relative _bi-conic-metal appearance-none pointer-cursor z-0)"
        )}
        ref={(instance) => {
          if (isNull(instance)) return;

          layout.update(
            "slider",
            name,
            instance
          );
        }}
        style={{
          ...style,
          ...(s=== 'm' ? INPUTS_NUMBER_SLIDER_STYLE : INPUTS_NUMBER_SLIDER_STYLE_SM),
        }}
        onChange={handleSliderChange}
        {...props}
      />
    </div>
  );
};
