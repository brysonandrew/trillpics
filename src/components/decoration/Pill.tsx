import { FC } from "react";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
} from "framer-motion";
import clsx, { ClassValue } from "clsx";
import { TGradientShortcut } from "~uno/shortcuts/box/gradient";
import { TChildren } from "@brysonandrew/config-types";
import { LightingGlow } from "~/components/decoration/lighting/glow";
import { TexturesWeaveRounded } from "~/components/textures/weave/rounded";
import { boxRadius } from "~/constants/box/style/radius";

export type TPillProps =
  HTMLMotionProps<"span"> & {
    classValue?: ClassValue;
    gradient?: TGradientShortcut;
    isCircle?: boolean;
    isActive?: boolean;
    children: TChildren;
  };
export const Pill: FC<TPillProps> = ({
  isCircle,
  classValue,
  gradient,
  isActive,
  children,
  style,
  ...props
}) => {
  const borderRadius = boxRadius();
  return (
    <motion.div
      className={clsx(
        "center h-6 text-current text-sm px-2 _gradient-radial",
        isCircle && "w-6",
        classValue,
      )}
      style={{ borderRadius, ...style }}
      layout
      {...props}
    >
      <AnimatePresence>
        {isActive && (
          <LightingGlow
            key="GLOW_KEY"
            classValue="-inset-2"
          />
        )}
      </AnimatePresence>
      <TexturesWeaveRounded />
      {children}
    </motion.div>
  );
};
