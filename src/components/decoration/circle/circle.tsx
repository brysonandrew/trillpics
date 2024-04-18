import type {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Glow } from "@/components/decoration/glow";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { Background1 } from "@/components/decoration/background/1";
import { TFlatProps } from "@/types/ui";
import { Background1Rounded } from "@/components/decoration/background/1/rounded";

export type TCircleProps =
  PropsWithChildren<
    TDivMotionProps & TFlatProps & {
      isGlow?: boolean;
      isDouble?: boolean;
    }
  >;
export const Circle: FC<
  TCircleProps
> = ({
  isFlat,
  isDouble,
  isGlow,
  children,
  style,
  ...props
}) => {
  return (
    <motion.div
      className="relative z-10"
      {...props}
    >
      <AnimatePresence>
        {isDouble && (
          <Background1Rounded
          layout
            key="double"
            style={style}
          />
        )}
        {isGlow && (
          <Glow key="GLOW_KEY" />
        )}
        <div className="relative">
          {/* <Background1Rounded style={style} isFlat={isFlat} layout/> */}
          <div className="relative">
            {children}
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
