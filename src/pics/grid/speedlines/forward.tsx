import type { FC } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { MOTION_BLUR_FILTER_SPEEDLINES_ID } from "~/shell/global/svg/filters/blur/constants";
import { useContextGrid } from "~/context";

export const SpeedlinesForward: FC =
  () => {
    const { scrollY } =
      useContextGrid();

    return (
      <BlurMotion2
        axis="y"
        id={
          MOTION_BLUR_FILTER_SPEEDLINES_ID
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
