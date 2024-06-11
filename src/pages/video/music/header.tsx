import type { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { MusicLayoutTitle } from "~/pages/video/music/title";
import { boxSize } from "~uno/rules/box/size";
import { IconsPlay } from "~/components/icons/playback/play";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { MusicBackground } from "~/pages/video/music/background";
import { boxRadius } from "~uno/rules/box/radius";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { PillBText } from "~/components/buttons/pill/b/text";

type TProps = Partial<TPillBProps> & {
  rightContent?: JSX.Element;
  leftContent?: JSX.Element;
};
export const MusicLayoutHeader: FC<
  TPropsWithChildren<TProps>
> = ({
  children,
  rightContent,
  leftContent,
  style,
  ...props
}) => {
  const s = boxSize();
  const {
    playerStyle,
    screenHeight,
    sidebarWidth,
    sidebarWidthOffset,
    y,
    gap,
    left,
    width,
  } = useVideoPlayerStyle();
  return (
    <div
      className="row relative"
      style={{
        gap: s.m0125,
        // paddingLeft:s.m0125/2,
        // paddingRight: s.m05,
      }}
    >
      {leftContent}
      <PillB
        Icon={IconsPlay}
        title={`play ${children}`}
        style={{
          gap: s.m0125,
          padding: s.m025,
          ...style,
        }}
        {...props}
      >
        <div
          className="row"
          style={{
            gap: s.m0125,
          }}
        >
          <LinesHorizontal 
             style={{
              width: s.m075,
            }}
          />
          <PillBText textSizeClass='text-xl' style={{top:s.m0125/2}}>
            {children}
          </PillBText>
        </div>
      </PillB>
      {rightContent}
    </div>
  );
};
