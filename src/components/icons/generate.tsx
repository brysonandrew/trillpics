import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import { TSvgProps } from "@brysonandrew/config-types";
import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";

export const IconsGenerate: FC<TSvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
{...resolveDimensions(40)}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={resolveUrlId(
          LINEAR_GRADIENT_SVG_ID
        )}
        d="M7 7h4v4H7zm-2 6v-2h2v2zm0 0v4H1v-4zm8 0h-2v-2h2zm4 0h-4v4h4zm2-2v2h-2v-2zm0 0h4V7h-4z"
      />
    </svg>
  );
};
