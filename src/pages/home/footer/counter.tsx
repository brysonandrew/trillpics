import type { FC } from "react";
import { Pill } from "@/components/decoration/Pill";
import { useShow } from "@/pages/home/footer/show/use-show";
import { useVideoStore } from "@/store";
import clsx from "clsx";
import { N } from "@/components/layout/N";

export const FooterCounterInline = () => <FooterCounter isInline/>
export const FooterCounter: FC<{isInline?:boolean}> =
  ({isInline}) => {
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
          isInline
            ? "relative pointer-events-none"
            : 'absolute -top-2.5 -right-2.5'
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
