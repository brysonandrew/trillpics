import { Rule } from "unocss";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "./gradient/constants";
// import { LINEAR_GRADIENT_SVG_ID } from "~app/color/gradient";
// import { LINEAR_GRADIENT_SVG_ID } from "../../../src/shell/init/svg/gradients/blue-pink-yellow";

export const ICON: Rule[] = [
  [
    "_dark-fill",
    {
      fill: resolveUrlId(
        LINEAR_GRADIENT_SVG_ID
      ),
    },
  ],
  [
    "_light-fill",
    {
      fill: "#ffffff",
    },
  ],
];
