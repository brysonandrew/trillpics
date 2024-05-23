import { resolveGradient } from "@brysonandrew/color-gradient";
import { resolveBoxBackground } from "@brysonandrew/utils-box";

export const spiral = (ringSize:number) =>
resolveBoxBackground({
  image: resolveGradient({
    name: "repeating-linear-gradient",
    parts: [
      "rgba(0,0,0,0.1)",
      `rgba(0,0,0,0.2) ${ringSize}px`,
      `transparent ${ringSize}px`,
      `transparent ${
        ringSize * 2
      }px`,
    ],
  }),
});
