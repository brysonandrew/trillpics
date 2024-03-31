import { PRESENCE_OPACITY } from "@brysonandrew/animation";
import { Glow } from "@components/decoration/glow";
import { RADIAL_BLUE_PINK_YELLOW } from "@constants/css/gradient";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import type {
  FC,
  PropsWithChildren,
} from "react";

export const Circle: FC<
  PropsWithChildren<{
    isGlow?: boolean;
  }>
> = ({ isGlow, children }) => {
  return (
    <div className="relative center h-20 px-4 z-10">
      <AnimatePresence>
        {isGlow && (
          <Glow
            key="GLOW_KEY"
    
          />
        )}
      </AnimatePresence>
      <div className="relative size-8 rounded-full bg-main">
        {children}
      </div>
    </div>
  );
};
