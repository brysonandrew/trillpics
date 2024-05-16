import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "~/shell/global/svg/gradients/blue-pink-yellow";
import { CursorCornersSet } from "~/pics/grid/pic/cursor/corners/set";
const SIZE = 100;
const CORNER_SIZE = 10;

export const CursorCorners: FC = () => {
  return (
    <svg
      className="pointer-events-none"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      height="100%"
      fill="none"
    >
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
          thickness: 0.6,
        }}
        stroke="#ffffff"
        inset={2}
        // strokeLinecap="round"
        // strokeLinejoin="round"
      />
      {/* <CursorCornersSet
        size={SIZE}
        corner={{
          size: CORNER_SIZE,
          thickness: 1,
        }}
        stroke="#000000"
        inset={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      /> */}
    </svg>
  );
};
