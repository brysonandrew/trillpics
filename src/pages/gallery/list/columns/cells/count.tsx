import type { FC } from "react";
import { motion } from "framer-motion";

type TProps = {
  size: number;
  colIndex: number;
  rowIndex: number;
  colsCount: number;
};
export const Count: FC<TProps> = ({
  size,
  colIndex,
  rowIndex,
  colsCount,
}) => {
  return (
    <motion.kbd
      className="center absolute top-0 left-0 h-8 px-3 rounded-full bg-gray-05 shadow text-black"
      style={{
        x:
          size * 0.05 + size * colIndex,
        y: size * 0.05,
        zIndex: 9999999,
      }}
    >
      {rowIndex * colsCount + colIndex}
    </motion.kbd>
  );
};
