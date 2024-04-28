import type { FC } from "react";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { LightingBase } from "~/components/decoration/lighting/base";

export const LightingGlow: FC<
  TDivMotionProps
> = ({ classValue, ...props }) => {
  return (
    <LightingBase
      lightingClassValue="_gradient_radial"
      {...props}
    />
  );
};
