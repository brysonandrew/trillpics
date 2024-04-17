import type { FC } from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const ActiveBackground: FC<
  TDivMotionProps
> = ({
  children,
  classValue,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(
        "fill-inset-1 cursor-pointer",
        classValue
      )}
      {...props}
    >
        <div className="relative">
          <>{children}</>
        </div>
    </motion.div>
  );
};
