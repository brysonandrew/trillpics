import { TDivMotionProps, TDivProps } from "@brysonandrew/config-types";
import { ClassValue } from "clsx";

export type TLinesOptions =TDivProps & 
  TDivMotionProps & {
    colorClass?: ClassValue;
    sizeClass?: ClassValue;
    opacityClass?: ClassValue;
    positionClass?: ClassValue;

  };
