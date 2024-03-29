import type { FC } from "react";
import { VideoCrossIcon } from "@shell/header/right/video/cross-icon";
import { useVideoStore } from "src/store";
import { N } from "@components/layout/text/N";
import { ActiveBackground } from "@shell/header/right/active-background";
import { Pill } from "@components/decoration/Pill";
import { useBase } from "@shell/providers/context/base";
import { VideoIcon } from "@shell/header/right/video/icon";
import { resolveGradient } from "@brysonandrew/color-gradient";
import { GRADIENT_BLUE_PINK_YELLOW_COLORS } from "@constants/css/gradient";

export const Video: FC = () => {
  const { onToggleVideoPics } =
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
          <ActiveBackground classValue="inset-0 border-main-inverted border-4 opacity-80" 
          
          style={{backgroundImage: resolveGradient({name:'radial-gradient',parts: ['circle at 100%', ...GRADIENT_BLUE_PINK_YELLOW_COLORS]})}}
          />
        )}
        <div className="relative">
        {videoPicsCount > 0 ? (
          <VideoIcon  />
        ) : (
          <VideoCrossIcon />
        )}
        </div>
      </button>
      {isVideoMode && videoPicsCount > 0 && (
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
