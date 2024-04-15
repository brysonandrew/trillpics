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
export type TCircleProps =
  PropsWithChildren<
    TDivMotionProps & {
      isGlow?: boolean;
    }
  >;
export const Circle: FC<
  TCircleProps
> = ({
  isGlow,
  children,
  ...props
}) => {
  return (
    <motion.div
      className="relative center size-16 px-4 z-10"
      {...props}
    >
      <AnimatePresence>
        {isGlow && (
          <Glow key="GLOW_KEY" />
        )}
      </AnimatePresence>
      <div className="relative size-8">
        <div className="relative">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
