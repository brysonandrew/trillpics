import { FC } from "react";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
} from "framer-motion";
import clsx, { ClassValue } from "clsx";
import { TGradientShortcut } from "~uno/shortcuts/box/gradient";
import { TChildren } from "@brysonandrew/config-types";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { TexturesMeshRounded } from "~/components/textures/mesh/rounded";
import { boxStyle } from "~/constants/box/style";

export type TPillProps =
  HTMLMotionProps<"span"> & {
    classValue?: ClassValue;
    sizeClass?: ClassValue;
    gradient?: TGradientShortcut;
    isCircle?: boolean;
    isActive?: boolean;
    children: TChildren;
  };
export const Pill: FC<TPillProps> = ({
  isCircle,
  sizeClass,
  classValue,
  gradient,
  isActive,
  children,
  style,
  ...props
}) => {
  const { borderRadius } = boxStyle({
    layer: "floating",
    borderRadius: "xl",
  });
  return (
    <motion.div
      className={clsx(
        "center h-5 text-sx px-1.5 _gradient-radial z-20 _outline-filter",
        sizeClass ??
          ("h-5" + isCircle
            ? " w-5"
            : ""),
        classValue
      )}
      style={{ borderRadius, ...style }}
      layout
      {...props}
    >
      {children}
    </motion.div>
  );
};
