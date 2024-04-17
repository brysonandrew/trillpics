import {
  FC,
  ReactNode,
  useState,
} from "react";
import { useVideoStore } from "src/store";
import { IconsVideo } from "@/components/icons/video";
import { ControlsCounter } from "@/pages/home/controls/counter";
import { IconsGallery } from "@/components/icons/gallery";
import { IconsVideoCross } from "@/components/icons/video-cross";
import { IconsBack1 } from "@/components/icons/back1";
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from "@brysonandrew/cursor";
import { PillB } from "@/components/interactive/pill/b";
import { Background1 } from "@/components/decoration/background-1";

type TProps = {
  inlineCounter: ReactNode;
};
export const ControlsVideo: FC<
  TProps
> = ({ inlineCounter }) => {
  const [
    isHoverFromVideo,
    setHoverFromVideo,
  ] = useState(false);
  const {
    isVideoMode,
    isPreviewOpen,
    toggleVideoMode,
    togglePreview,
    videoPics,
  } = useVideoStore();
  const isVideoPicsCount =
    videoPics.length > 0;
  const handleClick = () => {
    if (isPreviewOpen) {
      togglePreview(false);
    } else {
      setHoverFromVideo(isVideoMode);
      toggleVideoMode();
    }
  };
  const title = isPreviewOpen
    ? "Exit Preview"
    : isVideoMode
    ? "Exit Video Mode"
    : "Video Mode";
  const { isHover, handlers } =
    useHoverKey(NONE_CURSOR_KEY, title);
  const isInlineCounter =
    isVideoMode ||
    (!isHoverFromVideo && isHover);

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
            {isVideoPicsCount &&
              !isInlineCounter && (
                <ControlsCounter />
              )}
          </>
        }
        onClick={handleClick}
        Icon={
          isPreviewOpen
            ? IconsBack1
            : isVideoMode
            ? IconsBack1
            : isVideoPicsCount
            ? IconsVideo
            : IconsVideoCross
        }
        {...handlers}
      >
        {!isHoverFromVideo &&
          isHover &&
          title}
      </PillB>
    </>
  );
};
