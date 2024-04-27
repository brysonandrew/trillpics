import type { FC } from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TFlatProps } from "~/types/ui";

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
    style: {
      opacity: isFlat ? 0.3 : 0.6,
      ...style,
    },
    hover: {
      opacity: 0.9,
    },
    layout: true,
    ..._props,
  };
  return (
    <>
      <motion.div
        className={clsx(
          "fill opacity-light",
          isFlat
            ? clsx(
                "bg-black-05"
                // "neu-flat-sunken"
              )
            : clsx(
                "bg-gray"
                // "border border-white-04"
              ),
          classValue
        )}
        {...props}
      />
    </>
  );
};
