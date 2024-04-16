import type { FC } from "react";
import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";
import { TSvgProps } from "@brysonandrew/config-types";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import { resolveUrlId } from "@brysonandrew/utils-attributes";

export const IconsCross: FC<
  TSvgProps
> = (props) => {
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
        d="M7 3H3v4h4zm0 14H3v4h4zM17 3h4v4h-4zm4 14h-4v4h4zM8 8h2v2H8zm4 2h-2v4H8v2h2v-2h4v2h2v-2h-2v-4h2V8h-2v2z"
      />
    </svg>
  );
};
