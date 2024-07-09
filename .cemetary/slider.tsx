import {
  ChangeEventHandler,
  FC,
} from "react";
import clsx from "clsx";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TInputProps } from "~/types/inputs";
import { box } from "~uno/rules/box";
import { TTitleProps } from "@brysonandrew/config-types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
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
export const InputsNumbeSlider: FC<
  TProps
> = (props) => {
  const {
    min = MIN,
    max = MAX,
    step = STEP,
    title,
    onUpdate,
  } = props;
  const {
    audio: {
      filters: { filter },
    },
    layout: { slider },
  } = useMusicRefs();

  const handleSliderChange: ChangeEventHandler<
    HTMLInputElement
  > = ({
    currentTarget: { name, value },
  }) => {
    onUpdate(Number(value));
  };

  return (
    <div className="relative h-5 grow opacity">
      <input
        type="range"
        className={clsx(
          "fill",
          "appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:_bi-radial [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:(w-4 h-4) [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray"
        )}
        ref={slider}
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
        className="fill _bi-mesh pointer-events-none opacity-90"
        style={{
          ...box.r.xl,
          ...box.ix(-box.m00625),
        }}
      />
    </div>
  );
};
