import {
  ElementRef,
  ComponentPropsWithoutRef,
} from "react";
import { TAllParamsKey } from "~/pages/video/music/types";

import * as SliderPrimitive from "@radix-ui/react-slider";

export type TSlider =
  typeof SliderPrimitive.Root;
export type TSliderRef =
  ElementRef<TSlider>;
export type TSliderStyledProps =
  ComponentPropsWithoutRef<TSlider>;
export type TUpdateNodeHandler<
  K extends string,
  V extends number | string = number
> = (key: K, value: V) => void;

export type TUpdateNumberHandler = (
  value: number
) => void;

export type TUpdateNumberHandlerProps =
  {
    onUpdate: TUpdateNumberHandler;
  };



export type TSliderValueChangeHandler =
  TSliderStyledProps["onValueChange"];
