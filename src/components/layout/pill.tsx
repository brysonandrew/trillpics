import { FC } from "react";
import { motion } from "framer-motion";
import clsx, { ClassValue } from "clsx";
import { TGradientShortcut } from "~uno/shortcuts/gradient";
import {
  TChildren,
  TDivMotionProps,
} from "@brysonandrew/config-types";
import { boxRadius } from "~uno/rules/box/radius";
import { isString } from "~/utils/validation/is/string";
import { isNumber } from "~/utils/validation/is/number";
import { boxSize } from "~uno/rules/box/size";
import { boxPx } from "~/utils/box/px";

export type TPillProps = Omit<
  TDivMotionProps,
  "children"
> & {
  classValue?: ClassValue;
  sizeClass?: ClassValue;
  gradient?: TGradientShortcut;
  isCircle?: boolean;
  isActive?: boolean;
  background?: TChildren;
  children: TChildren | number;
};
export const Pill: FC<TPillProps> = ({
  isCircle,
  sizeClass,
  classValue,
  gradient,
  isActive,
  children,
  style,
  background,
  ...props
}) => {
  const s = boxSize();

  const borderRadius = boxRadius();
  return (
    <motion.div
      className={clsx(
        "center",
        sizeClass ??
          "h-4" +
            (isCircle ? " w-4" : ""),
        classValue
      )}
      style={{
        borderRadius,
        ...boxPx(s.m0125),
        ...style,
      }}
      {...props}
    >
      {background}
      {isString(children) ||
      isNumber(children) ? (
        <div className="relative uppercase text-xs">
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </motion.div>
  );
};
