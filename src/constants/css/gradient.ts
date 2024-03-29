import { resolveGradient } from "@brysonandrew/color-gradient";

export const GRADIENT_BLUE_PINK_YELLOW_COLORS =
  [
    "var(--blue)",
    "var(--pink)",
    "var(--yellow)",
  ] as const;

export const GRADIENT_BLUE_PINK_YELLOW =
  resolveGradient({
    name: "linear-gradient",
    parts: [
      "to left top",
      ...GRADIENT_BLUE_PINK_YELLOW_COLORS,
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
