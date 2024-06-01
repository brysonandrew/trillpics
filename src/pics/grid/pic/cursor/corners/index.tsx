import { motion } from "framer-motion";
import type { FC } from "react";
import { CursorCornersSet } from "~/pics/grid/pic/cursor/corners/set";
const SIZE = 200;
const CORNER_SIZE = 20;

export const CursorCorners: FC = () => {
  return (
    <motion.svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      height="100%"
      fill="none"
      initial={{scale:1}}
      animate={{scale:0.8}}
      exit={{scale:1}}
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
        strokeLinecap="round"
        strokeLinejoin="round"
        // className="text-white dark:text-black"
        stroke="currentColor"
        inset={2}
      />
    </motion.svg>
  );
};
