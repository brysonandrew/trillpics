import type { FC } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { MOTION_BLUR_FILTER_Y_ID } from "~/components/blur/constants";
import { useVirtualizeScroll } from "~/shell/pics/virtualize/use-scroll";

export const BlurY: FC = () => {
  const { blurY, isScrolling } =
    useVirtualizeScroll();

  return (
    <BlurMotion2
      axis="y"
      id={MOTION_BLUR_FILTER_Y_ID}
      gaussianBlurMotionProps={{}}
      morphologyProps={{}}
      intensity={0.0001}
      mRadius={10}
      displacementProps={{}}
      turbulenceMotionProps={{
        type: "turbulence",
      }}
      motionValue={blurY}
    />
  );
};
