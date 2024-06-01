import type { FC } from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { boxRadius } from "~uno/rules/box/radius";
import { TLightingClassValue } from "~/components/layout/lighting/types";

export const LightingBase: FC<
  TDivMotionProps & {
    lightingClassValue: TLightingClassValue;
  }
> = ({
  classValue,
  style,
  lightingClassValue,
  ...props
}) => {
  const borderRadius = boxRadius();
  return (
    <motion.div
      className={clsx(
        "absolute",
        classValue ??
          "inset-1 dark:opacity-50 opacity-20",
        lightingClassValue
      )}
      layout
      style={{
        borderRadius,
        filter: "blur(14px)",
        ...style,
      }}
      {...props}
    />
  );
};
