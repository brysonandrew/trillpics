import type { FC } from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TFlatProps } from "@/types/ui";

export type TBackground1Props =
  TDivMotionProps & TFlatProps;
export const Background1: FC<
  TBackground1Props
> = ({
  style,
  layout,
  classValue,
  isFlat,
  ..._props
}) => {
  const props = {
    layout: true,
    ..._props,
  };
  return (
    <motion.div
      className="fill overflow-hidden"
      {...{
        style: {
          opacity: isFlat ? 0.3  : 0.6,
          ...style,
        },
        hover: {
          opacity: 0.9,
        },
      }}
      {...props}
    >
      <motion.div
        style={style}
        className={clsx(
          "fill opacity-light",
          isFlat
            ? "bg-black-05 neu-flat-sunken"
            : "bg-gray border border-white-04",
          classValue
        )}
        {...props}

      />
      <motion.div
        style={style}
        className={clsx(
          "fill opacity-dark",
          isFlat
            ? "bg-black-04 neu-empty-flat-sunken"
            : "bg-black-2 border border-gray",
          classValue
        )}
        {...props}

      />
    </motion.div>
  );
};
