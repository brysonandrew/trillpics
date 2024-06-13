import type { FC } from "react";
import { IconsAlert } from "~/components/icons/alert";
import { IconsSave } from "~/components/icons/save";
import { IconsVideo } from "~/components/icons/video/video";
import { MusicBackground } from "~/pages/video/music/background";
import { boxSize } from "~uno/rules/box/size";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { BackgroundMesh } from "~/components/layout/background/mesh";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";

export const VideoMusicPlaybackSaveInfo: FC =
  () => {
    const s = boxSize();

    const { recording, isHover } =
      useTrillPicsStore(
        ({ recording, isHover }) => ({
          recording,
          isHover,
        })
      );

    const {
      sidebarWidthOffset,
      width,
      sidebarWidth,
    } = useVideoPlayerStyle();

    const {
      isRecording,
      isRecordingCooldown,
      seconds,
      handleStart,
    } = useMusicRecorderContext();
    const { saveProgress } =
      useMusicInitContext();
    const left = s.m - s.m025 - s.m0125;
    return (
      <div className="relative w-full">
       
        <div
          className="relative row uppercase font-sans"
          style={{
            left:
              sidebarWidthOffset +
              s.m0125,
            gap: s.m025,
            width:
              width -
              sidebarWidthOffset +
              s.m0125,
                paddingTop: s.m05,
            paddingBottom: s.m05,
          }}
        >
          {/* <MusicBackground
            boxStyle={{
              left: -s.m0125,
              width:
                width -
                sidebarWidth -
                s.m0125,
            }}
          /> */}

          {isRecording ||
          recording !== null ? (
            <>
              <div
                className="row relative text-xs"
                style={{
                  gap: s.m0125,
                  left: s.m0125,
                }}
              >
                {isRecording ? (
                  <>
                    <IconsSave />{" "}
                    <span>
                      Saving... Please
                      wait until the
                      recording is done
                      playing.
                    </span>
                  </>
                ) : isRecordingCooldown ? (
                  <>
                    <IconsSave />{" "}
                    <span>
                      Your recording has
                      been saved
                    </span>
                  </>
                ) : (
                  <>
                    <IconsVideo />{" "}
                    <span>
                      Your video now has
                      recording
                    </span>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <IconsAlert />
              <div className="text-xs">
                To save your changes you
                must play the recording
                from start to finish.
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
