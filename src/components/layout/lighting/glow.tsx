import type { FC } from "react";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { LightingBase } from "~/components/layout/lighting/base";

export const LightingGlow: FC<
  TDivMotionProps
> = ({ ...props }) => {
  return (
    <LightingBase
      lightingClassValue="_gradient_radial"
      {...props}
    />
  );
};
