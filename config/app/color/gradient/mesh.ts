import { resolveVarCss } from "@brysonandrew/color-base";
import { resolveGradient } from "@brysonandrew/color-gradient";
import { resolveBoxBackground } from "@brysonandrew/utils-box";

export const GRADIENT_MESH_DARK =
  resolveBoxBackground({
    image: resolveGradient({
      name: "repeating-conic-gradient",
      parts: [
        "rgba(0,0,0,0)",
        resolveVarCss("black-06"),
      ],
    }),
  });

export const GRADIENT_MESH_LIGHT =
  resolveBoxBackground({
    image: resolveGradient({
      name: "repeating-conic-gradient",
      parts: [
        "rgba(0,0,0,0)",
        resolveVarCss("black-04"),
      ],
    }),
  });

export const GRADIENT_MESH_COMMON =
  resolveBoxBackground({
    size: "4px 4px",
  });
