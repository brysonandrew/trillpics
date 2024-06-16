import { useVideoStyle } from "~/pages/video/style";
import { boxSize } from "~uno/rules/box/size";
import { IconsSave } from "~/components/icons/save";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { IconsTick } from "~/components/icons/tick";
import { IconsLoader } from "~/components/icons/loader";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { NOOP } from "~/constants/functions";
import { VideoMusicPlaybackHeaderTimers } from "~/pages/video/music/record/header/timers";

export const VideoMusicPlaybackHeader =
  () => {
    const s = boxSize();

    const { sidebarWidthOffset } =
      useVideoStyle();

    const {
      isRecording,
      isCooldown,
      handleStart,
    } = useMusicRecorderContext();

    return (
      <div className="relative row">
        <BackgroundGlass
          boxStyle={{
            left: sidebarWidthOffset,
          }}
        />

        <MusicLayoutHeader
          Icon={
            isRecording
              ? IconsLoader
              : isCooldown
              ? IconsTick
              : IconsSave
          }
          onClick={
            isRecording
              ? NOOP
              : handleStart
          }
          leftContent={
            <VideoMusicPlaybackHeaderTimers />
          }
        >
          Record
        </MusicLayoutHeader>
      </div>
    );
  };
