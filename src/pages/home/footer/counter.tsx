import type { FC } from "react";
import { Pill } from "@/components/decoration/Pill";
import { N } from "@/components/layout/text/N";
import { useShow } from "@/pages/home/footer/show/use-show";
import { useVideoStore } from "@/store";
import clsx from "clsx";

export const FooterCounter: FC =
  () => {
    const { isVideoMode } =
      useVideoStore();
    const {
      isViewingOnlyVideoPics,
      videoPicsCount,
    } = useShow();
    return (
      <Pill
        layoutId="FooterCounter"
        classValue={clsx(
          "z-20",
          isVideoMode
            ? "relative ml-1 pointer-events-none"
            : 'absolute -top-2 -right-2'
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
        <N>{videoPicsCount}</N>
      </Pill>
    );
  };
