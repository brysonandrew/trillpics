import type { FC } from "react";
import { Pill } from "~/components/decoration/Pill";
import { useShow } from "~/pages/home/controls/show/use-show";
import { useVideoStore } from "~/store";
import clsx from "clsx";
import { N } from "~/components/layout/N";
import { Glow } from "~/components/decoration/glow";

export const ControlsCounterInline =
  () => <ControlsCounter isInline />;
export const ControlsCounter: FC<{
  isInline?: boolean;
}> = ({ isInline }) => {
  const { isVideoMode } =
    useVideoStore();
  const {
    isViewingOnlyVideoPics,
    videoPicsCount,
  } = useShow();
  return (
    <Pill
      layoutId="ControlsCounter"
      classValue={clsx(
        "z-20",
        isInline
          ? "relative pointer-events-none"
          : "absolute -top-4 -right-4"
      )}
      isActive={
        !isVideoMode &&
        isViewingOnlyVideoPics
      }
      title={
        isVideoMode
          ? "Video pic count"
          : isViewingOnlyVideoPics
          ? "Show all"
          : `Show [${videoPicsCount}]`
      }
    >
      <Glow />
      <N>{videoPicsCount}</N>
    </Pill>
  );
};
