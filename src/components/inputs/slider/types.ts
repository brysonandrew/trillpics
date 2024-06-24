import { ElementRef, ComponentPropsWithoutRef } from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";


export type TSlider =
  typeof SliderPrimitive.Root;
export type TSliderRef =
  ElementRef<TSlider>;
export type TSliderStyledProps =
  ComponentPropsWithoutRef<TSlider>;
export type TUpdateNumberHandler = (
  value: number
) => void;
export type TUpdateNumberHandlerProps =
  {
    onUpdate?: TUpdateNumberHandler;
  };
  export type TSliderValueChangeHandler =
  TSliderStyledProps["onValueChange"];