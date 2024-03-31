import type { FC } from "react";
import { VideoCrossIcon } from "@shell/header/right/video/cross-icon";
import { useVideoStore } from "src/store";
import { N } from "@components/layout/text/N";
import { Pill } from "@components/decoration/Pill";
import { VideoIcon } from "@shell/header/right/video/icon";

export const Video: FC = () => {
  const {
    picsEntries,
    videoPics,
    countPics,
    pics,
    isVideoMode,
    toggleVideoMode,
    updatePicsEntries,
  } = useVideoStore();
  const videoPicsCount =
    videoPics.length;

  const handleClick = () =>
    toggleVideoMode();
  const handleCountClick = () => {
    if (
      videoPics.length === countPics()
    ) {
      updatePicsEntries(picsEntries[picsEntries.length - 2])
    } else {
      updatePicsEntries(videoPics);

    }

  };

  return (
    <div className="relative shrink-0 w-14 h-14">
      <button
        className="fill center"
        onClick={handleClick}
      >
        {/* {isVideoMode && (
          <ActiveBackground
            classValue="inset-0 opacity-100"
            style={{
              backgroundImage:
                resolveGradient({
                  name: "radial-gradient",
                  parts: [
                    "circle at 100%",
                    ...GRADIENT_BLUE_PINK_YELLOW_COLORS,
                  ],
                }),
            }}
          />
        )} */}
        <div className="relative">
          {videoPicsCount > 0 ? (
            <VideoIcon />
          ) : (
            <VideoCrossIcon />
          )}
        </div>
      </button>
      {isVideoMode &&
        videoPicsCount > 0 && (
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
