import type { FC } from "react";
import {
  Pill,
  TPillProps,
} from "~/components/decoration/Pill";
import clsx from "clsx";
import { N } from "~/components/layout/N";
import { Glow } from "~/components/decoration/glow";
import { useTrillPicsStore } from "~/store";

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
      {...props}
    >
      <Glow />
      <N>{videoPicsCount}</N>
    </Pill>
  );
};
