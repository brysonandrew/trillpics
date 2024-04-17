import type { CSSProperties, FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import { useScroll } from "@shell/providers/context/scroll";
import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";
import { TButtonMotionProps, TButtonProps } from "@brysonandrew/config-types";

export const ScrollTop: FC<
  CSSProperties
> = (props) => {
  const { listRef } = useScroll();

  const handleClick = () => {
    window.scrollTo(0, 0);
    listRef?.current?.scrollToItem?.(0);
  };

  return (
    <button
      className="relative center shrink-0"
      onClick={handleClick}
      style={props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        {...resolveDimensions(24)}
        viewBox="0 0 22 22"
      >
        <path
          fill={resolveUrlId(
            LINEAR_GRADIENT_SVG_ID
          )}
          d="M12 16h-2v-6H9v1H8v1H6v-2h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v2h-2v-1h-1v-1h-1m6 10H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"
        />
      </svg>
    </button>
  );
};
