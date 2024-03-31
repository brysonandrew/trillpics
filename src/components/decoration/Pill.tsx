import clsx, { ClassValue } from "clsx";
import { FC } from "react";
import { TGradientShortcut } from "@uno/shortcuts/gradient";
import { TChildren } from "@brysonandrew/config-types";
import {
  HTMLMotionProps,
  motion,
} from "framer-motion";
import { GRADIENT_BLUE_PINK_YELLOW } from "@constants/css/gradient";
import { Glow } from "@components/decoration/glow";

type TProps =
  HTMLMotionProps<"span"> & {
    classValue?: ClassValue;
    gradient?: TGradientShortcut;
    isCircle?: boolean;
    isActive?: boolean;
    children: TChildren;
  };
export const Pill: FC<TProps> = ({
  isCircle,
  classValue,
  gradient,
  isActive,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(
        "center h-6 text-current text-sm px-2 rounded-xl",
        isCircle && "w-6",
        classValue,
        gradient
      )}
      style={{
        backgroundImage:
          GRADIENT_BLUE_PINK_YELLOW,
      }}
      {...props}
    >
      {isActive && (
        <Glow key="GLOW_KEY" classValue="-inset-2" />
      )}

      {children}
    </motion.div>
  );
};
