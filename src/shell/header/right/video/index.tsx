import type { FC } from "react";
import { VideoCrossIcon } from "@shell/header/right/video/cross-icon";
import { useVideoStore } from "@pages/home/video/store";
import { N } from "@components/layout/text/N";
import { ActiveBackground } from "@shell/header/right/active-background";
import { Pill } from "@components/decoration/Pill";
import { useBase } from "@shell/providers/context/base";
import { VideoIcon } from "@shell/header/right/video/icon";
import { BORDER_GRADIENT } from "@constants/css";

export const Video: FC = () => {
  const {onToggleVideoPics } =
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
    <div className="relative shrink-0 w-18 h-14 backdrop-blur-lg">
      <button
        className="fill center"
        onClick={handleClick}
      >
        {isVideoMode && (
          <ActiveBackground
            style={BORDER_GRADIENT}
          />
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
          <Pill classValue="absolute -top-1 -right-1">
            <N>{videoPicsCount}</N>
          </Pill>
        </button>
      )}
    </div>
  );
};
