import type { FC } from "react";
import {
  Pill,
  TPillProps,
} from "~/components/decoration/Pill";
import clsx from "clsx";
import { N } from "~/components/layout/N";
import { LightingGlow } from "~/components/decoration/lighting/glow";
import { useTrillPicsStore } from "~/store";
import { RADIAL_BLUE_PINK_YELLOW } from "~app/color/gradient";

export const VideoPicsCounter: FC<
  Partial<TPillProps>
> = ({ classValue, ...props }) => {
  const { videoPics } =
    useTrillPicsStore(
      ({ videoPics }) => ({
        videoPics,
      })
    );
  const videoPicsCount =
    videoPics.length;
  const isVideoPicsCount =
    videoPicsCount > 0;
  if (!isVideoPicsCount) return null;
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
      <N>{videoPicsCount}</N>
    </Pill>
  );
};
