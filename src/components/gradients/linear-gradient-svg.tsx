import type { FC } from "react";
import {
  GRADIENT_BLUE_PINK_YELLOW_COLORS,
  GRADIENT_TEAL_YELLOW_PINK_COLORS,
} from "~app/color/gradient";
export const LINEAR_GRADIENT_SVG_ID =
  "linear-gradient-blue-pink-yellow-svg";
type TProps = { isDarkMode: boolean };
export const LinearGradientBluePinkYellowSvg: FC<
  TProps
> = ({ isDarkMode }) => {
  return (
    <svg
      width="100%"
      height="100%"
      className="absolute"
    >
      <linearGradient
        id={
          LINEAR_GRADIENT_SVG_ID
        }
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
    </svg>
  );
};
