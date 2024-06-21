import { useVideoStyle } from "~/pages/video/style";
import { boxSize } from "~uno/rules/box/size";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { TimerDisplayHeader } from "~/components/playback/timer/display/header";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useMusicPlay } from "~/hooks/music/play";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { IconsLoader } from "~/components/icons/loader";
import { IconsSave } from "~/components/icons/save";
import { IconsTick } from "~/components/icons/tick";

export const VideoMusicPlaybackHeader =
  () => {
    const s = boxSize();
    const musicPlay = useMusicPlay();
    const {
      isRecording,
      isCooldown,
      audioSeconds,
      handleStart,
    } = useMusicRecorderContext();
    const videoSeconds =
      usePicVideoReadSeconds();
    const { sidebarWidthOffset } =
      useVideoStyle();
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
          onClick={handleStart}
          leftContent={
            <TimerDisplayHeader
              isActive={
                musicPlay.isPlaying
              }
              seconds={videoSeconds}
              progressKey="recorder"
              isCooldown={
                musicPlay.isCooldown
              }
            />
          }
          rightContent={
            <>
              <LinesHorizontalLight />
            </>
          }
        >
          Save
        </MusicLayoutHeader>
      </div>
    );
  };
