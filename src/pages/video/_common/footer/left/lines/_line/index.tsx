import type { FC } from "react";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TLineProps } from "~/pages/video/_common/footer/left/lines/types";
import { motion } from "framer-motion";

export type TLines_LineProps =TDivMotionProps & TLineProps;
export const Lines_Line: FC<TLines_LineProps> = ({
  colorClass,
  classValue,
  opacityClass,
  style,
  sizeClass,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(
        "relative grow",
        sizeClass ?? "border",
        colorClass ?? "border-white dark:border-black",
        opacityClass ??"opacity-50",
        classValue
      )}
      style={{ ...style }}
      {...props}
    />
  );
};
