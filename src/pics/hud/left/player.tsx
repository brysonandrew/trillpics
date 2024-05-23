import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { VIDEO_PLAYER_ROUTE } from "~/constants/params";
import { PlaybackButtonsPlay } from "~/components/remotion/player/playback/buttons/play";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import { PlaybackButtonsBackward } from "~/components/remotion/player/playback/buttons/backward";
import { PlaybackButtonsForward } from "~/components/remotion/player/playback/buttons/forward";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { Generate } from "~/pages/video/player/_header/generate";
import { boxSize } from "~/constants/box/size";
export const CONTROLS_PLAYER_TITLE =
  "Video player";
export const ControlsPlayer: FC<
  TVideoFooterProps &
    Partial<TPillBHoverProps>
> = ({
  Button = PillBHover,
  title,

  ...props
}) => {
  const count = usePicVideoReadCount();
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({
      screen,
    })
  );
  const s = boxSize();
  const { togglePathValue, isActive } =
    useNavigationControls(
      VIDEO_PLAYER_ROUTE
    );
  const handleClick = () => {
    togglePathValue(VIDEO_PLAYER_ROUTE);
  };
  if (!screen.isDimensions) return null;
  if (isActive) {
    return (
      <div
        className="column-start h-0"
        style={{
          gap: s.m,
          width: screen.container.width,
        }}
      >
        <div
          className="row"
          style={{ gap: s.m05 }}
        >
          <PlaybackButtonsPlay
            isSelected
            {...props}
          />
          <div
            className="row-space"
            style={{
              width:
                screen.container.width -
                s.m,
              paddingLeft: `${s.m05}px`,
              paddingRight: `${s.m25}px`,
            }}
          >
            <PlaybackButtonsBackward />
            <PlaybackTimer />
            <PlaybackButtonsForward />
          </div>
        </div>
        <div className="w-full">
          <PlaybackProgressSeeker />
        </div>
        <Generate />
        {/* <div className="h-8" />
          <div className="row-space">
            <PlaybackButtonsBackward />
            <PlaybackTimer />
            <PlaybackButtonsForward />
          </div> */}
      </div>
    );
  }

  return (
    <>
      <Button
        title={
          title ?? CONTROLS_PLAYER_TITLE
        }
        subtitle={
          count === 0
            ? "View and download video with 5 random gallery pics."
            : "View and download your creation."
        }
        onClick={handleClick}
        Icon={IconsPlay}
        isSelected={isActive}
        {...props}
      >
        {title}
      </Button>
    </>
  );
};
