import type { FC } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { MOTION_BLUR_FILTER_X_ID } from "~/shell/init/svg/filters/blur/constants";
import { useInitContext } from "~/shell/init/context";

export const BlurX: FC = () => {
  const { main } =
    useInitContext();
  return (
    <BlurMotion2
      axis="x"
      id={MOTION_BLUR_FILTER_X_ID}
      gaussianBlurMotionProps={{
        baseFrequency: "0.001",
        // stdDeviation: "0.1",
      }}
      morphologyProps={{}}
      intensity={0.0001}
      mRadius={0.00001}
      displacementProps={{}}
      turbulenceMotionProps={{
        type: "turbulence",
      }}
      motionValue={main.blur.value.x}
    />
  );
};
