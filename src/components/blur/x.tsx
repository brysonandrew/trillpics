import type { FC } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { useScroll } from "~/context/scroll";
import { MOTION_BLUR_FILTER_X_ID } from "~/components/blur/constants";

export const BlurX: FC = () => {
  const { blurX } = useScroll();

  return (
    <BlurMotion2
      axis="x"
      id={MOTION_BLUR_FILTER_X_ID}
      // filterProps={{
      //   x: "-50%",
      //   y: "-50%",
      //   height: "200%",
      //   width: "200%",
      // }}
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
