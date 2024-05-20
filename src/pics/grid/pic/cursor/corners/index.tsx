import type { FC } from "react";
import { CursorCornersSet } from "~/pics/grid/pic/cursor/corners/set";
const SIZE = 200;
const CORNER_SIZE = 20;

export const CursorCorners: FC = () => {
  return (
    <svg
      className="pointer-events-none"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      height="100%"
      fill="none"
    >
      {/* <rect
        x="0"
        y="0"
        width={SIZE}
        height={SIZE}
        fill={resolveUrlId(
          LINEAR_GRADIENT_SVG_ID
        )}
        fillOpacity={0.2}
      /> */}
      {/* <CursorCornersSet
        size={SIZE}
        corner={{
          size: CORNER_SIZE,
          thickness: 1.5,
        }}
        stroke={resolveUrlId(
          LINEAR_GRADIENT_SVG_ID
        )}
        inset={2}
        // strokeLinecap="round"
        // strokeLinejoin="round"
      /> */}

      <CursorCornersSet
        size={SIZE}
        corner={{
          size: CORNER_SIZE,
          thickness: 0.4,
        }}
        className="stroke-white dark:stroke-black"
        stroke="currentColor"
        inset={2}
      />
    </svg>
  );
};
