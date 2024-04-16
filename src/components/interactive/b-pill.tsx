import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  TButtonMotionProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import {
  Circle,
  TCircleProps,
} from "@components/decoration/circle";
import { resolveDimensions } from "@/utils/dimensions/resolve-dimensions";
import { Background1 } from "@/components/decoration/background-1";
import { Glow } from "@/components/decoration/glow";

type TProps = TButtonMotionProps & {
  Icon: FC<TSvgProps>;
  iconProps?: TSvgProps;
  circleProps?: TCircleProps;
  outerCircle?: ReactNode;
  isFlat?: boolean;
  
};
export const BPill: FC<TProps> = ({
  Icon,
  iconProps,
  circleProps,
  children,
  classValue,
  outerCircle,
  isFlat,
  ...props
}) => {
  return (
    <motion.button
      className={clsx(
        "relative h-10 text-lg text-white dark:text-gray-8",
        children && "pr-2",
        classValue
      )}
      layout
      {...props}
    >
      {isFlat ? null : <Glow />}
      {outerCircle}
      <Background1 layout />
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
        {children && (
          <motion.div
            layout="preserve-aspect"
            className="relative flex items-center gap-2 whitespace-nowrap overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
};
