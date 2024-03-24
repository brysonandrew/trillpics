import type { FC } from "react";
import { VideoCrossIcon } from "@shell/header/right/video/cross-icon";
import { useVideoStore } from "@pages/home/video/store";
import { N } from "@components/layout/text/N";
import clsx from "clsx";
import { ActiveBackground } from "@shell/header/right/active-background";
import { Pill } from "@components/decoration/Pill";
import { useBase } from "@shell/providers/context/base";
import { VideoIcon } from "@shell/header/right/video/icon";

export const Video: FC = () => {
  const { pics, onToggleVideoPics } =
    useBase();
  const {
    videoPics,
    isVideoMode,
    toggleVideoMode,
  } = useVideoStore();
  const videoPicsCount =
    videoPics.length;

  const handleClick = () =>
    toggleVideoMode();

  const handleCountClick = () => {
    onToggleVideoPics();
  };

  return (
    <div className="relative shrink-0 w-18 h-14">
      <button
        className={clsx("fill center")}
        onClick={handleClick}
      >
        {isVideoMode && (
          <ActiveBackground classValue="border-3" />
        )}
        {videoPicsCount > 0 ? (
          <VideoIcon />
        ) : (
          <VideoCrossIcon />
        )}
      </button>
      {videoPicsCount > 0 && (
        <button
          onClick={handleCountClick}
        >
          <Pill
            classValue="absolute -top-1 -right-1"
            gradient="bg-red-orange-amber"
          >
            <N>{videoPicsCount}</N>
          </Pill>
        </button>
      )}
    </div>
  );
};
