import { Rule } from "unocss";
import {
  boxBackgroundCss,
  boxBorderCss,
} from "@brysonandrew/utils-box";
import { GRADIENT_CONIC_RULES } from "./conic";
import {
  GRADIENT_MESH_DARK_CSS,
  GRADIENT_MESH_COMMON_CSS,
  GRADIENT_MESH_LIGHT_CSS,
} from "./mesh";
import {
  GRADIENT_BLUE_PINK_YELLOW,
  GRADIENT_TEXT_COMMON,
  GRADIENT_TEAL_YELLOW_PINK,
  GRADIENT_BORDER_COMMON,
  RADIAL_BLUE_PINK_YELLOW,
  RADIAL_TEAL_YELLOW_PINK,
} from "./constants";
import {
  OUTLINE_FILTER_SVG_PROPS,
  OUTLINE_FILTER_SVG_DARK_PROPS,
} from "../filters/outline";

export const GRADIENTS: Rule[] = [
  ...GRADIENT_CONIC_RULES,
  [
    "_dark-outline-filter",
    {
      ...OUTLINE_FILTER_SVG_DARK_PROPS,
    },
  ],
  [
    "_light-outline-filter",
    { ...OUTLINE_FILTER_SVG_PROPS },
  ],
  [
    "_dark-gradient-mesh",
    {
      ...GRADIENT_MESH_DARK_CSS,
      ...GRADIENT_MESH_COMMON_CSS,
    },
  ],
  [
    "_light-gradient-mesh",
    {
      ...GRADIENT_MESH_LIGHT_CSS,
      ...GRADIENT_MESH_COMMON_CSS,
    },
  ],
  [
    "_dark-gradient-text",
    {
      ...boxBackgroundCss({
        image:
          GRADIENT_BLUE_PINK_YELLOW,
      }),
      ...GRADIENT_TEXT_COMMON,
    },
  ],
  [
    "_light-gradient-text",
    {
      ...boxBackgroundCss({
        image:
          GRADIENT_TEAL_YELLOW_PINK,
      }),
      ...GRADIENT_TEXT_COMMON,
    },
  ],
  [
    "_dark-gradient-border",
    {
      ...boxBorderCss({
        imageSource: `${GRADIENT_BLUE_PINK_YELLOW}`,
        imageSlice: 1,
      }),
      ...GRADIENT_BORDER_COMMON,
    },
  ],
  [
    "_light-gradient-border",
    {
      ...boxBorderCss({
        imageSource: `${GRADIENT_TEAL_YELLOW_PINK}`,
        imageSlice: 1,
      }),
      ...GRADIENT_BORDER_COMMON,
    },
  ],
  [
    "_dark-radial-gradient",
    {
      ...boxBackgroundCss({
        image: RADIAL_BLUE_PINK_YELLOW,
      }),
    },
  ],
  [
    "_light-radial-gradient",
    {
      ...boxBackgroundCss({
        image: RADIAL_TEAL_YELLOW_PINK,
      }),
    },
  ],
  [
    "_dark-linear-gradient",
    {
      ...boxBackgroundCss({
        image:
          GRADIENT_BLUE_PINK_YELLOW,
      }),
    },
  ],
  [
    "_light-linear-gradient",
    {
      ...boxBackgroundCss({
        image:
          GRADIENT_TEAL_YELLOW_PINK,
      }),
    },
  ],
];
