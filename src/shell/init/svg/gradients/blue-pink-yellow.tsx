import type { FC } from "react";

import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { GRADIENT_BLUE_PINK_YELLOW_COLORS, GRADIENT_TEAL_YELLOW_PINK_COLORS, LINEAR_GRADIENT_SVG_ID } from "~uno/rules/gradient/constants";

type TProps = { isDarkMode: boolean };

export const GradientsBluePinkYellow: FC<
  TProps
> = ({ isDarkMode }) => {
  return (
    <SvgWrap className="absolute">
      <linearGradient
        id={LINEAR_GRADIENT_SVG_ID}
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        {(isDarkMode
          ? GRADIENT_BLUE_PINK_YELLOW_COLORS
          : GRADIENT_TEAL_YELLOW_PINK_COLORS
        ).map(
          (
            color,
            index,
            { length: count }
          ) => (
            <stop
              key={`${index}`}
              offset={`${
                (100 / (count - 1)) *
                index
              }%`}
              stopColor={color}
            />
          )
        )}
      </linearGradient>
    </SvgWrap>
  );
};
