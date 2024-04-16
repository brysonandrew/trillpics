import { FC } from "react";
import { VideoCrossIcon } from "@pages/home/footer/video/cross-icon";
import { useVideoStore } from "src/store";
import { IconsVideo } from "@/components/icons/video";
import { useShow } from "@/pages/home/footer/show/use-show";
import { Circle } from "@/components/decoration/circle";
import { useCircleButtonStyle } from "@/components/interactive/use-circle-button-style";
import { FooterCounter } from "@/pages/home/footer/counter";
import {
  NONE_CURSOR_KEY,
  resolveHoverKeyParts,
  useCursor,
  useHoverKey,
} from "@brysonandrew/cursor";
import { BPill } from "@/components/interactive/b-pill";
import { resolveInteractiveLabels } from "@brysonandrew/utils-attributes";
import { IconsGallery } from "@/components/icons/gallery";

export const FooterVideo: FC = () => {
  const {
    isVideoMode,
    toggleVideoMode,
  } = useVideoStore();
  const style = useCircleButtonStyle();

  const handleClick = () =>
    toggleVideoMode();
  const { videoPicsCount } = useShow();
  const {
    hoverKeyParts: [_, hoverKey],
    onHoverKey,
  } = useCursor();
  const title = isVideoMode
    ? "Gallery Mode"
    : "Video Mode";

  const { isHover, handlers } =
    useHoverKey(NONE_CURSOR_KEY, "v");

  return (
    <BPill
      {...resolveInteractiveLabels(
        title
      )}
      outerCircle={
        videoPicsCount > 0 &&
        !isVideoMode && (
          <FooterCounter />
        )
      }
      onClick={handleClick}
      Icon={
        isVideoMode
          ? IconsGallery
          : videoPicsCount > 0
          ? IconsVideo
          : VideoCrossIcon
      }
      {...handlers}
    >
      {isHover && title}
    </BPill>
  );
};
