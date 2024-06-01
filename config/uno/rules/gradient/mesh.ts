import { resolveVarCss } from "@brysonandrew/color-base";
import { resolveGradient } from "@brysonandrew/color-gradient";
import { boxBackgroundCss } from "@brysonandrew/utils-box";

export const GRADIENT_MESH_DARK_CSS =
  boxBackgroundCss({
    image: resolveGradient({
      name: "repeating-conic-gradient",
      parts: [
        "rgba(0,0,0,0.6)",
        resolveVarCss("black"),
      ],
    }),
  });

export const GRADIENT_MESH_LIGHT_CSS =
  boxBackgroundCss({
    image: resolveGradient({
      name: "repeating-conic-gradient",
      parts: [
        "rgba(0,0,0,0.6)",
      resolveVarCss("black-5"),
      ],
    }),
  });

export const GRADIENT_MESH_COMMON_CSS =
  boxBackgroundCss({
    size: "4px 4px",
  });
