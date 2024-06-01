import type { FC } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { useContextReady } from "~/shell/ready/context";

export const ScrollForward: FC =
  () => {
    const { scrollY } =
      useContextReady();

    return (
      <BlurMotion2
        axis="y"
        id={
          MOTION_BLUR_FILTER_SCROLL_ID
        }
        gaussianBlurMotionProps={{}}
        morphologyProps={{}}
        intensity={0.000000001}
        mRadius={0.000000001}
        tNumOctaves={128}
        displacementProps={{}}
        turbulenceMotionProps={{
          type: "fractalNoise",
        }}
        filterProps={{
          className: "absolute inset-0",
          height: "100px",
          width: "100px",
          y: "0px",
          x: "0px",
        }}
        motionValue={scrollY}
      />
    );
  };
