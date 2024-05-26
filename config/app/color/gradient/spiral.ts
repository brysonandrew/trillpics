import { resolveGradient } from "@brysonandrew/color-gradient";
import { boxBackgroundCss, resolveBoxBackground } from "@brysonandrew/utils-box";

export const spiral = (ringSize:number) =>
  boxBackgroundCss({
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
