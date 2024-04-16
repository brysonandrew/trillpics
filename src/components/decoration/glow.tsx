import type { FC } from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { FADE_PRESENCE_05} from "@/constants/animation";

export const Glow: FC<
  TDivMotionProps
> = ({ classValue, ...props }) => {
  return (
    <motion.div
      className={clsx(
        "absolute bg-gray rounded-full _radial-gradient",
        classValue ?? "inset-1"
      )}
      style={{
        filter: "blur(14px)",
      }}
      {...props}
    />
  );
};
