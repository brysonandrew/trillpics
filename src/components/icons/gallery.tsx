import type { FC } from "react";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";
import { TSvgProps } from "@brysonandrew/config-types";
import { resolveUrlId } from "@brysonandrew/utils-attributes";

export const IconsGallery: FC<TSvgProps> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...resolveDimensions(24)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={resolveUrlId(
          LINEAR_GRADIENT_SVG_ID
        )}
        d="M2 2h20v16h-5v2h-2v-2H9v2H7v-2H2zm5 18v2H5v-2zm10 0v2h2v-2zm3-16H4v12h16zm-8 4h2v2h-2zm-2 4v-2h2v2zm0 0v2H8v-2zm6 0h-2v-2h2zm0 0h2v2h-2zM8 6H6v2h2z"
      />
    </svg>
  );
};
