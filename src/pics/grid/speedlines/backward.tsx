import { FC, useRef } from "react";
import { BlurMotion2 } from "@brysonandrew/svg-filter";
import { MOTION_BLUR_FILTER_SPEEDLINES_ID } from "~/shell/global/svg/filters/blur/constants";
import { useContextGrid } from "~/context";

export const SpeedlinesBackward: FC =
  () => {
    const { scrollY, main } =
      useContextGrid();
    const prevScrollOffsetRef =
      useRef<number>(0);

    // useMotionValueEvent(
    //   scrollY,
    //   "velocityChange",
    //   (velocity) => {
    //     if (
    //       main.blur.value.y.isAnimating()
    //     ) {
    //       main.blur.control.y?.stop();
    //     }

    //     if (velocity === 0) {
    //       main.blur.control.y = animate(
    //         main.blur.value.y,
    //         0,
    //         {
    //           type: "inertia",
    //           restDelta: 0,
    //           velocity:
    //             prevScrollOffsetRef.current *
    //             0.0001,
    //         }
    //       );
    //     } else {
    //       prevScrollOffsetRef.current =
    //         velocity;
    //     }
    //   }
    // );

    return (
      <BlurMotion2
        axis="y"
        id={
          MOTION_BLUR_FILTER_SPEEDLINES_ID
        }
        gaussianBlurMotionProps={{
          baseFrequency: "0.006",
          // stdDeviation: "0.1",
        }}
        morphologyProps={{}}
        intensity={10}
        mRadius={10}
        displacementProps={{}}
        turbulenceMotionProps={{
          // baseFrequency: "0.5",
          type: "fractalNoise",
        }}
        filterProps={{
          colorInterpolationFilters:
            "sRGB",
        }}
        motionValue={scrollY}
      />
    );
  };
