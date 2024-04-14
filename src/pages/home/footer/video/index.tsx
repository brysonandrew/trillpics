import { FC } from "react";
import { VideoCrossIcon } from "@pages/home/footer/video/cross-icon";
import { useVideoStore } from "src/store";
import { N } from "@components/layout/text/N";
import { Pill } from "@components/decoration/Pill";
import { IconsVideo } from "@/components/icons/video";
import { NOOP } from "@brysonandrew/utils-function";
import { useShow } from "@/pages/home/footer/use-show";

export const FooterVideo: FC = () => {
  const {
    isVideoMode,
    toggleVideoMode,
  } = useVideoStore();

  const handleClick = () =>
    toggleVideoMode();
  const {isViewingOnlyVideoPics, videoPicsCount,onToggleShow} = useShow()
  return (
    <div className="relative shrink-0 w-14 h-14">
            <div className="absolute inset-0 dark:bg-black bg-gray-6 opacity-50 rounded-full" />

      <button
        className="fill center"
        onClick={handleClick}
      >
        <div className="relative">
          {videoPicsCount > 0 ? (
            <IconsVideo />
          ) : (
            <VideoCrossIcon />
          )}
        </div>
      </button>
      {videoPicsCount > 0 && (
        <button
          className={
            isVideoMode
              ? "pointer-events-none"
              : undefined
          }
          onClick={
            isVideoMode
              ? NOOP
              : onToggleShow
          }
        >
          <Pill
            isActive={
             !isVideoMode && isViewingOnlyVideoPics
            }
            classValue="absolute -top-1.5 -right-1.5"
            title={
              isVideoMode
                ? "Video pic count"
                : isViewingOnlyVideoPics
                ? "Show all"
                : `Show [${videoPicsCount}]`
            }
          >
            {isVideoMode ? (
              <span>
                X
              </span>
            ) : (
              <N>{videoPicsCount}</N>
            )}
          </Pill>
        </button>
      )}
    </div>
  );
};
