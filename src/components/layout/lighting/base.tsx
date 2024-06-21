import type { FC } from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { boxRadius } from "~uno/rules/box/radius";
import { TLightingClassValue } from "~/components/layout/lighting/types";

export const LightingBase: FC<
  TDivMotionProps & {
    lightingClass?: TLightingClassValue;
    opacityClass?: `opacity-${number}`;
    insetClass?: `${
      | ""
      | "-"}inset-${number}`;
  }
> = ({
  classValue,
  style,
  insetClass,
  opacityClass,
  lightingClass,
  ...props
}) => {
  const borderRadius = boxRadius();
  return (
    <motion.div
      className={clsx(
        "absolute",
        lightingClass ?? "bg-white",
        opacityClass ??
          "dark:opacity-40 opacity-20",
        insetClass ?? "-inset-1",
        classValue
      )}
      layout
      style={{
        borderRadius,
        filter: "blur(6px)",
        ...style,
      }}
      {...props}
    />
  );
};
