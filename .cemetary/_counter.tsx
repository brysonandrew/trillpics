import type { FC } from "react";
import { Pill } from "~/components/decoration/Pill";
import { useShow } from "~/pages/directors/controls/show/use-show";
import clsx from "clsx";
import { N } from "~/components/layout/N";
import { Glow } from "~/components/decoration/glow";
import { useDirectorsMode } from "~/hooks/use-navigation-controls";

export const ControlsCounterInline =
  () => <ControlsCounter isInline />;
export const ControlsCounter: FC<{
  isInline?: boolean;
}> = ({ isInline }) => {
  const { isDirectorsMode } =
    useDirectorsMode();
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
        !isDirectorsMode &&
        isViewingOnlyVideoPics
      }
      title={
        isDirectorsMode
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
