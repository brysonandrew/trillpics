import { FC } from "react";
import { motion } from "framer-motion";
import { VideoCrossIcon } from "@pages/home/footer/video/cross-icon";
import { useVideoStore } from "src/store";
import { N } from "@components/layout/text/N";
import { Pill } from "@components/decoration/Pill";
import { IconsVideo } from "@/components/icons/video";
import { NOOP } from "@brysonandrew/utils-function";
import { useShow } from "@/pages/home/footer/show/use-show";
import { Circle } from "@/components/decoration/circle";
import clsx from "clsx";
import { useCircleButtonStyle } from "@/components/interactive/use-circle-button-style";
import { FooterCounter } from "@/pages/home/footer/counter";

export const FooterVideo: FC = () => {
  const {
    isVideoMode,
    toggleVideoMode,
  } = useVideoStore();
  const style = useCircleButtonStyle();

  const handleClick = () =>
    toggleVideoMode();
  const {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
  } = useShow();
  return (
    <Circle>
      <button
        className="center"
        style={style}
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
      {videoPicsCount > 0 &&
        !isVideoMode && (
          <FooterCounter />
        )}
    </Circle>
  );
};
