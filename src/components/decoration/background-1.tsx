import type { FC } from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { useApp } from "@brysonandrew/app";

export const Background1: FC<
  TDivMotionProps
> = ({
  style,
  classValue,
  ..._props
}) => {
  const { BORDER_RADIUS } = useApp();

  const props = {
    style: {
      borderRadius: BORDER_RADIUS.XL,
      ...style,
    },
    ..._props,
  };

  return (
    <motion.div
      className={clsx(
        "fill pointer-events-none",
        classValue
      )}
      style={{
        opacity: 0.6,
        ...props.style,
      }}
      variants={{
        hover: { opacity: 0.8 },
      }}
      {..._props}
    >
      <motion.div
        className={clsx(
          "fill bg-gray-2 border-black-02 border opacity-light",
          classValue
        )}
        {...props}
      />
      <motion.div
        className={clsx(
          "fill bg-black border-white-02 border opacity-dark",
          classValue
        )}
        {...props}
      />
    </motion.div>
  );
};
