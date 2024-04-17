import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";
import { TSvgProps } from "@brysonandrew/config-types";

export const IconsVideoCross: FC<
  TSvgProps
> = (props) => (
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
      d="M4 5H2v14h14v-4h2v2h2v2h2V5h-2v2h-2v2h-2V5zm10 12H4V7h10zm-4-6H8V9H6v2h2v2H6v2h2v-2h2v2h2v-2h-2zm0 0V9h2v2z"
    />
  </svg>
);
