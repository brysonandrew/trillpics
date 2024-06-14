import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { VideoMusicPlaybackTimer } from "~/pages/video/music/record/timer";
import { boxSize } from "~uno/rules/box/size";
import { IconsSave } from "~/components/icons/save";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { MusicBackground } from "~/pages/video/music/background";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { IconsTick } from "~/components/icons/tick";
import { IconsLoader } from "~/components/icons/loader";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { NOOP } from "~/constants/functions";

export const VideoMusicPlaybackHeader =
  () => {
    const s = boxSize();

    const { sidebarWidthOffset } =
      useVideoPlayerStyle();

    const {
      isRecording,
      isRecordingCooldown,
      seconds,
      handleStart,
    } = useMusicRecorderContext();

    return (
      <div
        className="relative row"
        style={{
          // gap: s.m05,
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
          onClick={isRecording ? NOOP : handleStart}
          leftContent={
            <div
              className="flex flex-row w-full items-center"
              style={{
                gap: s.m0125,
              }}
            >
              <VideoMusicPlaybackTimer
                isPlaying={isRecording}
                seconds={seconds}
              />
              <LinesHorizontal />
            </div>
          }
        >
          Record
        </MusicLayoutHeader>
      </div>
    );
  };
