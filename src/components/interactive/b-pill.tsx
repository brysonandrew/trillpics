import { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  TButtonMotionProps,
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import {
  Circle,
  TCircleProps,
} from "@components/decoration/circle";
import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";
import { Background1 } from "@/components/decoration/background-1";
import { useApp } from "@brysonandrew/app";

type TProps = TButtonMotionProps & {
  Icon: FC<TSvgProps>;
  iconProps?: TSvgProps;
  circleProps?: TCircleProps;
};
export const BPill: FC<TProps> = ({
  Icon,
  iconProps,
  circleProps,
  children,
  classValue,
  ...props
}) => {

  return (
    <motion.button
      className={clsx(
        "relative h-10 pr-2 text-lg text-white dark:text-gray-8",
        classValue
      )}
      layout
      {...props}
    >
      <Background1/>
      <motion.div
        className="row p-1 gap-1"
        layout
      >
        <Circle {...circleProps} layout>
          <div className="p-1">
          <Icon
            {...resolveDimensions(24)}
            {...(iconProps ?? {})}
          />
          </div>
        </Circle>
        <motion.div
          layout="preserve-aspect"
          className="relative flex items-center gap-2 whitespace-nowrap"
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};
