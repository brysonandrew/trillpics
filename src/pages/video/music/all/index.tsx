import { FC, useRef } from "react";
import {
  TDivProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { boxSize } from "~uno/rules/box/size";
import { AllMusicLoop } from "~/pages/video/music/all/loop";
import { MusicPlay } from "~/pages/video/music/all/play";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { useVideoStyle } from "~/pages/video/style";
import { boxRadius } from "~uno/rules/box/radius";

type TProps =
  TPropsWithChildren<TDivProps>;
export const MusicAll: FC<TProps> = ({
  style,
  ...props
}) => {
  const {
    y,
    gap,
    left,
    width,
    sidebarWidth,
    sidebarWidthOffset,
    screen,
  } = useVideoStyle();
  const scrollRef =
    useRef<HTMLDivElement | null>(null);
  const s = boxSize();
  const borderRadius = boxRadius();
  const videoSeconds =
    usePicVideoReadSeconds();
  return (
    <div
      className="fixed z-20"
      style={{
        left:left - s.m2,
        top: y+s.m4-s.m0125,
        gap: s.m2,
        ...style,
      }}
      {...props}
    >
      <MusicPlay />
    </div>
  );
};
