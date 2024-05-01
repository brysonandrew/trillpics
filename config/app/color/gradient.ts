import { resolveVarCss } from "@brysonandrew/color-base";
import { resolveGradient } from "@brysonandrew/color-gradient";
import {
  DARK_LOGO,
  LIGHT_LOGO,
  TValues,
} from "../color/config/constants";

export const GRADIENT_MESH_DARK = {
  "background-image": resolveGradient({
    name: "repeating-conic-gradient",
    parts: [
      "rgba(0,0,0,0)",
      resolveVarCss("black-06"),
    ],
  }),
};

export const GRADIENT_MESH_LIGHT = {
  "background-image": resolveGradient({
    name: "repeating-conic-gradient",
    parts: [
      "rgba(0,0,0,0)",
      resolveVarCss("black-04"),
    ],
  }),
};

export const GRADIENT_MESH_COMMON = {
  "background-size": "4px 4px",
};

export const GRADIENT_BLUE_PINK_YELLOW_COLORS =
  [
    ...(Object.values(
      DARK_LOGO
    ) as TValues<typeof DARK_LOGO>),
    // "var(--blue)",
    // "var(--pink)",
    // "var(--yellow)",
  ] as const;

export const GRADIENT_TEAL_YELLOW_PINK_COLORS =
  [
    ...(Object.values(
      LIGHT_LOGO
    ) as TValues<typeof LIGHT_LOGO>),
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
  "border-width": "2px",
  "border-style": "solid",
  "border-image-slice": 1,
};

export const GRADIENT_TEXT_COMMON = {
  "background-size": "100% 100%",
  "-webkit-background-clip": "text",
  "-webkit-text-stroke":
    "8px transparent",
};
export const GRADIENT_ZEBRA = resolveGradient({
  name: "repeating-linear-gradient",
  parts: [
    "to top left",
    "black",
    "black 40px",
    "white 40px",
    "white 80px",
  ],
});