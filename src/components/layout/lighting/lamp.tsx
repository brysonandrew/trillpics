import type { FC } from "react";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { LightingBase } from "~/components/layout/lighting/base";
import clsx from "clsx";

export const LightingLamp: FC<
  TDivMotionProps
> = ({ classValue, ...props }) => {
  return (
    <LightingBase
      classValue={clsx(classValue)}
      {...props}
    />
  );
};
