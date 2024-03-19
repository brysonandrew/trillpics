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
        "fill w-full h-full border-indigo cursor-pointer",
        classValue ?? "border-2"
      )}
      {...props}
    >
      <>
        <div className="fill bg-indigo opacity-5" />
        <div className="relative">
          <>{children}</>
        </div>
      </>
    </motion.div>
  );
};
