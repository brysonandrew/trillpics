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

export const VideoMusicPlaybackHeader =
  () => {
    const s = boxSize();

    const {
      sidebarWidthOffset,
    } = useVideoPlayerStyle();

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
          // paddingLeft: s.m0125,
          // paddingRight: s.m0125,
          gap: s.m05, height:s.m15 }}
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
          onClick={handleStart}
        >
          Record
        </MusicLayoutHeader>
        <VideoMusicPlaybackTimer
          isPlaying={isRecording}
          seconds={seconds}
        />
        <LinesHorizontal />
      </div>
    );
  };
