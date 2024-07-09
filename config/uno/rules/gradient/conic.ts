import { boxBackgroundCss } from "@brysonandrew/utils-box";
import { Rule } from "unocss";
import {
  DARK_CONIC,
  DARK_METAL_CONIC,
  LIGHT_CONIC,
  LIGHT_METAL_CONIC,
} from "./constants";

export const GRADIENT_CONIC_RULES: Rule[] =
  [
    [
      "_light-conic",
      {
        ...boxBackgroundCss({
          image: LIGHT_CONIC,
        }),
      },
    ],
    [
      "_dark-conic",
      {
        ...boxBackgroundCss({
          image: DARK_CONIC,
        }),
      },
    ],
    [
      "_light-conic-metal",
      {
        ...boxBackgroundCss({
          image: LIGHT_METAL_CONIC,
        }),
      },
    ],
    [
      "_dark-conic-metal",
      {
        ...boxBackgroundCss({
          image: DARK_METAL_CONIC,
        }),
      },
    ],
  ];
