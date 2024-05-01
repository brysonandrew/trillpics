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
  const {borderRadius} = boxStyle({
    layer: "floating",
    borderRadius: "XL",
  });
  return (
    <motion.div
      className={clsx(
        "center h-6 text-current text-sm px-2 _gradient-radial",
        isCircle && "w-6",
        classValue
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
      <TexturesMeshRounded />
      {children}
    </motion.div>
  );
};
