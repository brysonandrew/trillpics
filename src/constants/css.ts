import { resolveGradient } from "@brysonandrew/color-gradient";
import { screen } from "../../config/uno/index";
import { resolveIntRecord } from "../utils/css";

export const BREAKPOINT_RECORD = screen;

export const BREAKPOINT_INT_RECORD =
  resolveIntRecord(BREAKPOINT_RECORD);

export const GRADIENT_BLUE_PINK_YELLOW =
  resolveGradient({
    name: "linear-gradient",
    parts: [
      "to left top",
      "var(--blue)",
      "var(--pink)",
      "var(--yellow)",
    ],
  });
export const BORDER_GRADIENT = {
  borderWidth: 2,
  borderStyle: "solid",
  borderImage:
    GRADIENT_BLUE_PINK_YELLOW,
  borderImageSlice: 1,
};
export const TEXT_GRADIENT = {
  background: GRADIENT_BLUE_PINK_YELLOW,
  backgroundSize: "100% 100%",
  WebkitBackgroundClip: "text",
  WebkitTextStroke: "8px transparent",
};
