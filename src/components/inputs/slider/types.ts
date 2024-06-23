import { ElementRef, ComponentPropsWithoutRef } from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";


export type TSlider =
  typeof SliderPrimitive.Root;
export type TSliderRef =
  ElementRef<TSlider>;
export type TSliderStyledProps =
  ComponentPropsWithoutRef<TSlider>;
export type TUpdateSliderHandler = (
  value: number
) => void;
export type TUpdateSliderHandlerProps =
  {
    onUpdate?: TUpdateSliderHandler;
  };
  export type TValueChangeHandler =
  TSliderStyledProps["onValueChange"];