import {
  DARK_LOGO,
  LIGHT_LOGO,
} from "../color/config/constants";
import { resolveVarCss } from "@brysonandrew/color-base";
import { resolveGradient } from "@brysonandrew/color-gradient";

export const GRADIENT_BLUE_PINK_YELLOW_COLORS =
  [
    ...(
      Object.values(
        DARK_LOGO
      ) as (keyof typeof DARK_LOGO)[]
    )
    // "var(--blue)",
    // "var(--pink)",
    // "var(--yellow)",
  ] as const;

export const GRADIENT_TEAL_YELLOW_PINK_COLORS =
  [
    ...(
      Object.values(
        LIGHT_LOGO
      ) as (keyof typeof LIGHT_LOGO)[]
    )
    // "var(--pink1)",
    // "var(--teal)",
    // "var(--yellow1)",
    // "rgb(255,229,77)",//#ffe54d
    // "rgb(106,219,198)",//6adbc6
    // "rgb(255,115,192)",//ff73c0
  ] as const;

export const GRADIENT_BLUE_PINK_YELLOW =
  resolveGradient({
    name: "linear-gradient",
    parts: [
      "to left top",
      ...GRADIENT_BLUE_PINK_YELLOW_COLORS,
    ],
  });

export const GRADIENT_TEAL_YELLOW_PINK =
  resolveGradient({
    name: "linear-gradient",
    parts: [
      "to left top",
      ...GRADIENT_TEAL_YELLOW_PINK_COLORS,
    ],
  });

export const RADIAL_BLUE_PINK_YELLOW =
  resolveGradient({
    name: "radial-gradient",
    parts: [
      "circle at 100%",
      ...GRADIENT_BLUE_PINK_YELLOW_COLORS,
    ],
  });
export const RADIAL_TEAL_YELLOW_PINK =
  resolveGradient({
    name: "radial-gradient",
    parts: [
      "circle at 100%",
      ...GRADIENT_TEAL_YELLOW_PINK_COLORS,
    ],
  });
export const GRADIENT_BORDER_COMMON = {
  "border-width": 2,
  "border-style": "solid",
  "border-image-slice": 1,
};

export const GRADIENT_TEXT_COMMON = {
  "background-size": "100% 100%",
  "-webkit-background-clip": "text",
  "-webkit-text-stroke":
    "8px transparent",
};
