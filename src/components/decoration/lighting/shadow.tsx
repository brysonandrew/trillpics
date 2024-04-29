import type { FC } from "react";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { LightingBase } from "~/components/decoration/lighting/base";

export const LightingShadow: FC<
  TDivMotionProps
> = ({ ...props }) => {
  return (
    <LightingBase
      lightingClassValue="shadow"
      {...props}
    />
  );
};
