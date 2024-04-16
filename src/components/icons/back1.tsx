import type { FC } from "react";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import { TSvgProps } from "@brysonandrew/config-types";
import { resolveUrlId } from "@brysonandrew/utils-attributes";

export const IconsBack1: FC<
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
          LINEAR_GRADIENT_SVG_ID
        )}
        d="M11 7h10v2H11zm-8 4h2V9h2v2h14v2H7v2H5v-2H3zm4 4v2h2v-2zm0-6V7h2v2zm14 6H11v2h10z"
      />
    </svg>
  );
};
