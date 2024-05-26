import type { FC } from "react";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TLinesOptions } from "~/components/lines/types";
import { motion } from "framer-motion";

export type TLines_LineProps =TLinesOptions;
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
        "relative grow pointer-events-none",
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
