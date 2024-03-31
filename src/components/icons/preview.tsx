import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID } from "@components/gradients/linear-gradient-blue-pink-yellow-svg";
import { TSvgProps } from "@brysonandrew/config-types";

export const IconsBack: FC<
  TSvgProps
> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        fill={resolveUrlId(
          LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
        )}
        d="M5 12v-2h1V9h1V8h1V7h1V6h2v2h-1v1H9v1h9v2H9v1h1v1h1v2H9v-1H8v-1H7v-1H6v-1"
      />
    </svg>
  );
};
