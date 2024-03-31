import type { FC } from "react";
import { motion } from "framer-motion";
import { PRESENCE_OPACITY } from "@brysonandrew/animation";
import { RADIAL_BLUE_PINK_YELLOW } from "@constants/css/gradient";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const Glow: FC<
  TDivMotionProps
> = ({classValue,...props}) => {
  return (
    <motion.div
      className={clsx("absolute bg-gray rounded-full",classValue ?? "inset-1")}
      style={{
        backgroundImage:
          RADIAL_BLUE_PINK_YELLOW,
        filter: "blur(14px)",
      }}
      {...PRESENCE_OPACITY}
      {...props}
    />
  );
};
