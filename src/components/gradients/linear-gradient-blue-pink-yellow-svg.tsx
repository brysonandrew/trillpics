import type { FC } from "react";
import { GRADIENT_BLUE_PINK_YELLOW_COLORS } from "@constants/css/gradient";
export const LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID = 'linear-gradient-blue-pink-yellow-svg'
export const LinearGradientBluePinkYellowSvg: FC =
  () => {
    return (
      <svg width='100%' height='100%' className="absolute">
        <linearGradient
        id={LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID}
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        {GRADIENT_BLUE_PINK_YELLOW_COLORS.map(
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
      </svg>
    );
  };
