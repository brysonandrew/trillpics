import type { FC } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { MOTION_BLUR_FILTER_Y_ID } from "~/shell/init/svg/filters/blur/constants";
import { useInitContext } from "~/shell/init/context";

export const BlurY: FC = () => {
  const { main } =
    useInitContext();

  return (
    <BlurMotion2
      axis="y"
      id={MOTION_BLUR_FILTER_Y_ID}

      gaussianBlurMotionProps={{
        baseFrequency: "0.001",
        // stdDeviation: "0.1",
      }}
      morphologyProps={{}}
      intensity={0.0001}
      mRadius={1}
      displacementProps={{}}
      turbulenceMotionProps={{
        type: "turbulence",
      }}
      motionValue={main.blur.value.y}
    />
  );
};
