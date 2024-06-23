import { useVideoStyle } from "~/pages/video/style";
import { MusicLayoutHeader } from "~/pages/video/music/layout/header";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { TimerDisplayHeader } from "~/components/playback/timer/display/header";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useMusicPlay } from "~/hooks/music/play";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsStop } from "~/components/icons/playback/stop";
import { MusicControlsButtonsRecord } from "~/pages/video/music/controls/buttons/record";
import { MusicLayoutHeaderTitle } from "~/pages/video/music/layout/header/title";
import { MusicLayoutHeaderTitleText } from "~/pages/video/music/layout/header/title/text";

export const VideoMusicSaveHeader =
  () => {
    const musicPlay = useMusicPlay();
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
          title={`play ${"music"}`}
          Icon={
            musicPlay.isPlaying
              ? IconsStop
              : IconsPlay
          }
          onClick={musicPlay.play}
          leftContent={
            <TimerDisplayHeader
              isActive={
                musicPlay.isPlaying
              }
              seconds={videoSeconds}
              progressKey="track"
              isCooldown={
                musicPlay.isCooldown
              }
            />
          }
          rightContent={
            <>
              <LinesHorizontalLight />
              <MusicLayoutHeaderTitleText>
                Save
              </MusicLayoutHeaderTitleText>
              <MusicLayoutHeaderTitle>
                <MusicControlsButtonsRecord />
              </MusicLayoutHeaderTitle>
            </>
          }
        >
          Track
        </MusicLayoutHeader>
      </div>
    );
  };
