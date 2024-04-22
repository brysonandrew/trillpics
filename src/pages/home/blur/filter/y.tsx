import type { FC } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { MOTION_BLUR_FILTER_Y_ID } from "~/pages/home/blur/constants";
import { useScroll } from "~/context/scroll";

export const BlurY: FC = () => {
  const { blurY, isScrolling } =
    useScroll();

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
