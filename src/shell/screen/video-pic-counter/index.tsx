import type { FC } from "react";
import {
  Pill,
  TPillProps,
} from "~/components/layout/counter";
import clsx from "clsx";
import { N } from "~/components/layout/N";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { RADIAL_BLUE_PINK_YELLOW } from "~app/color/gradient";
import { usePicVideo } from "~/hooks/pic/video";

export const VideoPicsCounter: FC<
  Partial<TPillProps>
> = ({ classValue, ...props }) => {
  const { count, isVideoPics } =
    usePicVideo();
  if (!isVideoPics) return null;
  return (
    <Pill
      layoutId="ControlsCounter"
      classValue={clsx(
        "pointer-events-none",
        classValue ?? "relative"
      )}
      style={{
        backgroundImage:
          RADIAL_BLUE_PINK_YELLOW,
      }}
      {...props}
    >
      <LightingGlow />
      <N>{count}</N>
    </Pill>
  );
};
