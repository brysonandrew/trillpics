import type { FC } from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { useApp } from "@brysonandrew/app";

export const Background1: FC<
  TDivMotionProps
> = ({ style, ..._props }) => {
  const { BORDER_RADIUS } = useApp();

  const props = {
    style: {
      borderRadius: BORDER_RADIUS.XL,
    },
    ..._props,
  };
  return (
    <motion.div
      className="fill opacity-40"
      layout
      {...props}
    >
      <motion.div
        className={clsx(
          "fill bg-gray-6 border-black-02 border opacity-light"
        )}
        {...props}
      />
      <motion.div
        className={clsx(
          "fill bg-black-2 border-white-02 border opacity-dark"
        )}
        {...props}
      />
    </motion.div>
  );
};
