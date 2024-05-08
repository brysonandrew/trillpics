import { Rule } from "unocss";
import {
  boxBackgroundCss,
  boxBorderCss,
} from "@brysonandrew/utils-box";
import {
  GRADIENT_MESH_DARK,
  GRADIENT_MESH_COMMON,
  GRADIENT_MESH_LIGHT,
} from "../../app/color/gradient/mesh";
import {
  GRADIENT_BLUE_PINK_YELLOW,
  GRADIENT_TEXT_COMMON,
  GRADIENT_TEAL_YELLOW_PINK,
  GRADIENT_BORDER_COMMON,
  RADIAL_BLUE_PINK_YELLOW,
  RADIAL_TEAL_YELLOW_PINK,
} from "../../app/color/gradient";

export const GRADIENTS: Rule[] = [
  [
    "_dark-gradient-mesh",
    {
      ...GRADIENT_MESH_DARK,
      ...GRADIENT_MESH_COMMON,
    },
  ],
  [
    "_light-gradient-mesh",
    {
      ...GRADIENT_MESH_LIGHT,
      ...GRADIENT_MESH_COMMON,
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
        image: `${GRADIENT_BLUE_PINK_YELLOW} 20`,
      }),
      ...GRADIENT_BORDER_COMMON,
    },
  ],
  [
    "_light-gradient-border",
    {
      ...boxBorderCss({
        image: `${GRADIENT_TEAL_YELLOW_PINK} 20`,
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
