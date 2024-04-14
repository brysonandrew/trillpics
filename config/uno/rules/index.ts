import { Rule } from "unocss";
import { resolveRules as _resolveRules } from "@brysonandrew/uno-rules";
import {
  GRADIENT_BLUE_PINK_YELLOW,
  GRADIENT_BORDER_COMMON,
  GRADIENT_TEAL_YELLOW_PINK,
  GRADIENT_TEXT_COMMON,
  RADIAL_BLUE_PINK_YELLOW,
  RADIAL_TEAL_YELLOW_PINK,
} from "../../../config/app/color/gradient";
import { SHADOWS } from "./shadows";
import { BORDERS } from "./borders";
import { CURSORS } from "./cursors";
import { NEU } from "./neu";

export const resolveRules = <
  T extends object
>() =>
  [
    ...CURSORS,
    ...SHADOWS,
    ...BORDERS,
    ...NEU,
    ..._resolveRules<T>(),
    [
      "fade-in-animation",
      {
        "animation-name": "fade-in",
        "animation-delay": "0ms",
        "animation-duration": "600ms",
      },
    ],
    [
      "fade-out-animation",
      {
        "animation-name": "fade-out",
        "animation-delay": "0ms",
        "animation-duration": "600ms",
      },
    ],
    [
     "_dark-gradient-text",
      {
        "background-image":
          GRADIENT_BLUE_PINK_YELLOW,
        ...GRADIENT_TEXT_COMMON,
      },
    ],
    [
      "_light-gradient-text",
      {
        "background-image":
          GRADIENT_TEAL_YELLOW_PINK,
        ...GRADIENT_TEXT_COMMON,
      },
    ],
    [
      "_dark-gradient-border",
      {
        "border-image":
          GRADIENT_BLUE_PINK_YELLOW,
        ...GRADIENT_BORDER_COMMON,
      },
    ],
    [
      "_light-gradient-border",
      {
        "border-image":
          GRADIENT_TEAL_YELLOW_PINK,
        ...GRADIENT_BORDER_COMMON,
      },
    ],
    [
      "_dark-radial-gradient",
      {
        "background-image":
          RADIAL_BLUE_PINK_YELLOW,
      },
    ],
    [
      "_light-radial-gradient",
      {
        "background-image":
          RADIAL_TEAL_YELLOW_PINK,
      },
    ],
  ] as Rule<T>[];
