import type { FC } from "react";
import {
  TSvgProps
} from "@brysonandrew/config-types/dom";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import clsx from "clsx";

export const IconsPlay: FC<
  TSvgProps
> = ({ classValue, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="160"
      className={clsx(classValue)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={resolveUrlId(
          LINEAR_GRADIENT_SVG_ID
        )}
      //  fill="currentColor"
        d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z"
      />
    </svg>
  );
};
