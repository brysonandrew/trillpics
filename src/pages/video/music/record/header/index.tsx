import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { boxSize } from "~uno/rules/box/size";
import { IconsSave } from "~/components/icons/save";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { MusicBackground } from "~/pages/video/music/background";
import { IconsTick } from "~/components/icons/tick";
import { IconsLoader } from "~/components/icons/loader";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { NOOP } from "~/constants/functions";
import { VideoMusicPlaybackHeaderTimers } from "~/pages/video/music/record/header/timers";

export const VideoMusicPlaybackHeader =
  () => {
    const s = boxSize();

    const { sidebarWidthOffset } =
      useVideoPlayerStyle();

    const {
      isRecording,
      isRecordingCooldown,
      handleStart,
    } = useMusicRecorderContext();

    return (
      <div
        className="relative row"
        style={{
          height: s.m15,
        }}
      >
        <MusicBackground
          boxStyle={{
            left: sidebarWidthOffset,
          }}
        />

        <MusicLayoutHeader
          Icon={
            isRecording
              ? IconsLoader
              : isRecordingCooldown
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
