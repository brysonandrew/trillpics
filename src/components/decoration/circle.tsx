import type {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Glow } from "@components/decoration/glow";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { Background1 } from "@/components/decoration/background-1";

export type TCircleProps =
  PropsWithChildren<
    TDivMotionProps & {
      isGlow?: boolean;
      isDouble?: boolean;
    }
  >;
export const Circle: FC<
  TCircleProps
> = ({
  isDouble,
  isGlow,
  children,
  ...props
}) => {
  return (
    <motion.div
      className="relative z-10"
      {...props}
    >
      <AnimatePresence>
        {isDouble && (
          <Background1 key="double" />
        )}
        {isGlow && (
          <Glow key="GLOW_KEY" />
        )}
        <div className="relative">
          <Background1 />
          <div className="relative">
            {children}
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
