import {
  FC,
  ReactNode,
  useRef,
  useState,
} from "react";
import { useVideoStore } from "src/store";
import { IconsVideo } from "@/components/icons/video/video";
import { ControlsCounter } from "@/pages/home/controls/counter";
import { IconsVideoCross } from "@/components/icons/video/video-cross";
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from "@brysonandrew/cursor";
import { PillB } from "@/components/buttons/pill/b";
import { IconsArrowsLeft } from "@/components/icons/arrows/left";

type TProps = {
  inlineCounter: ReactNode;
};
export const ControlsVideo: FC<
  TProps
> = ({ inlineCounter }) => {
  const prevHoverRef = useRef<
    null | string
  >(null);
  const [
    isHoverFromVideo,
    setHoverFromVideo,
  ] = useState(false);
  const {
    isVideoMode,
    isPlayerOpen,
    toggleVideoMode,
    togglePlayer,
    videoPics,
  } = useVideoStore();
  const isVideoPicsCount =
    videoPics.length > 0;
  const handleClick = () => {
    if (isPlayerOpen) {
      togglePlayer(false);
    } else {
      setHoverFromVideo(isVideoMode);
      toggleVideoMode();
    }
  };
  const title = isPlayerOpen
    ? "Exit Preview"
    : isVideoMode
    ? "Exit Video Mode"
    : isVideoPicsCount
    ? "Continue Video"
    : "Create Video";
  const {
    isHover,
    handlers: {
      onMouseLeave,
      ...handlers
    },
  } = useHoverKey(
    NONE_CURSOR_KEY,
    title
  );
  const isCounter =
    isVideoPicsCount && !isPlayerOpen;
  const isInlineCounter =
    isCounter &&
    (isVideoMode ||
      (!isHoverFromVideo && isHover));

  const handleMouseLeave = () => {
    prevHoverRef.current = title;
    onMouseLeave();
  };

  return (
    <>
      {isVideoPicsCount &&
        isInlineCounter &&
        inlineCounter}
      <PillB
        key={title}
        title={title}
        outerCircle={
          <>
            {isCounter &&
              !isInlineCounter && (
                <ControlsCounter />
              )}
          </>
        }
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
        Icon={
          isPlayerOpen || isVideoMode
            ? IconsArrowsLeft
            : isVideoPicsCount
            ? IconsVideo
            : IconsVideoCross
        }
        {...handlers}
      >
        {!isHoverFromVideo &&
        isHover &&
        (title === prevHoverRef.current || prevHoverRef.current === null)
          ? title
          : ""}
      </PillB>
    </>
  );
};
