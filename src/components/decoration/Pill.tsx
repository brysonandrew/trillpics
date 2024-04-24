import { FC } from "react";
import {
  HTMLMotionProps,
  motion,
} from "framer-motion";
import clsx, { ClassValue } from "clsx";
import { TGradientShortcut } from "~uno/shortcuts/gradient";
import { TChildren } from "@brysonandrew/config-types";
import { Glow } from "~/components/decoration/glow";
import { DecorationNet } from "~/components/decoration/background/net";

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
  ...props
}) => {
  return (
    <motion.div
      className={clsx(
        "center h-6 text-current text-sm px-2 rounded-xl _radial-gradient",
        isCircle && "w-6",
        classValue,
        gradient
      )}
      layout
      {...props}
    >
      {isActive && (
        <Glow
          key="GLOW_KEY"
          classValue="-inset-2"
        />
      )}
      <DecorationNet classValue="rounded-xl" />
      {children}
    </motion.div>
  );
};
