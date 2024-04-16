import type { FC } from "react";
import { TSvgProps } from "@brysonandrew/config-types";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import { useVideoStore } from "@store/index";
import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";

export const IconsVideo: FC<
  TSvgProps
> = (props) => {
  const { isVideoMode } =
    useVideoStore();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...resolveDimensions(24)}
      viewBox="0 0 24 24"
      {...props}
    >
      {isVideoMode ? (
        <path
          fill={resolveUrlId(
            LINEAR_GRADIENT_SVG_ID
          )}
          d="M2 5h14v4h2V7h2V5h2v14h-2v-2h-2v-2h-2v4H2zm2 12h10V7H4z"
        />
      ) : (
        <path
          fill={resolveUrlId(
            LINEAR_GRADIENT_SVG_ID
          )}
          d="M2 5h14v4h2V7h2V5h2v14h-2v-2h-2v-2h-2v4H2zm2 12h10V7H4z"
        />
      )}
    </svg>
  );
};
