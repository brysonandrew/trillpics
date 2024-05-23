import type {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { TFlatProps } from "~/types/ui";

export type TCircleProps =
  PropsWithChildren<
    TDivMotionProps &
      TFlatProps & {
        isGlow?: boolean;
      }
  >;
export const Circle: FC<
  TCircleProps
> = ({
  isFlat,
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
        {isGlow && (
          <LightingGlow key="GLOW_KEY" />
        )}
        <div className="relative">
          <div className="relative">
            {children}
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
