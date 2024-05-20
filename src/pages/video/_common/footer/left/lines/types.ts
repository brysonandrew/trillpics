import { TDivMotionProps } from "@brysonandrew/config-types";
import { ClassValue } from "clsx";

export type TLinesOptions =
  TDivMotionProps & {
    colorClass?: ClassValue;
    sizeClass?: ClassValue;
    opacityClass?: ClassValue;
  };
