import type { FC } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { MOTION_BLUR_FILTER_X_ID } from "~/components/blur/constants";
import { useVirtualizeContext } from "~/shell/pics/virtualize/context";

export const BlurX: FC = () => {
  const { blurX } =
    useVirtualizeContext();

  return (
    <BlurMotion2
      axis="x"
      id={MOTION_BLUR_FILTER_X_ID}
      gaussianBlurMotionProps={{}}
      morphologyProps={{}}
      intensity={0.0001}
      mRadius={0.00001}
      displacementProps={{}}
      turbulenceMotionProps={{
        type: "turbulence",
      }}
      motionValue={blurX}
    />
  );
};
