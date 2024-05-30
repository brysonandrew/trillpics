import { FC } from "react";
import {
  HTMLMotionProps,
  motion,
} from "framer-motion";
import clsx, { ClassValue } from "clsx";
import { TGradientShortcut } from "~uno/shortcuts/box/gradient";
import { TChildren } from "@brysonandrew/config-types";
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
        "center h-4 px-2 z-20",
        sizeClass ??
          "h-4" +
            (isCircle ? " w-4" : ""),
        classValue
      )}
      style={{ borderRadius, ...style }}
      {...props}
    >
      <div
        className="absolute -inset-0.25 dark:(bg-black bg-image-none) _gradient-radial"
        style={{ borderRadius }}
      />
      <div
        className="absolute inset-0 dark:(bg-white opacity-50 bg-image-none) _light-gradient-mesh"
        style={{ borderRadius }}
      />
      <span className="relative">
        {children}
      </span>
    </motion.div>
  );
};
