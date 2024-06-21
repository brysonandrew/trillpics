import type { FC } from "react";
import { IconsAlert } from "~/components/icons/alert";
import { IconsSave } from "~/components/icons/save";
import { IconsVideo } from "~/components/icons/video/video";
import { boxSize } from "~uno/rules/box/size";
import { useVideoStyle } from "~/pages/video/style";
import { useTrillPicsStore } from "~/store/middleware";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { boxPx } from "~/utils/box/px";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";

export const VideoMusicPlaybackSaveLog: FC =
  () => {
    const s = boxSize();

    const { recording } =
      useTrillPicsStore(
        ({ recording }) => ({
          recording,
        })
      );

    const { width } = useVideoStyle();

    const { isRecording, isCooldown } =
      useMusicRecorderContext();
    return (
      <div
        className="relative row uppercase font-sans"
        style={{
          left: 0,
          gap: s.m025,
          width: width,
          paddingTop: s.m05-s.m0125,
          paddingBottom: s.m05+s.m0125,
          ...boxPx(s.m05 - s.m0625),
        }}
      >
        <div
          className="row relative"
          style={{
            gap: s.m0125,
            left: s.m05 - s.m0125,
          }}
        >
          {isRecording ? (
            <IconsSave />
          ) : isCooldown ? (
            <IconsSave />
          ) : recording !== null ? (
            <IconsVideo />
          ) : (
            <IconsAlert />
          )}
          <LinesHorizontalLight
            style={{ width: s.m }}
          />
          <div className="grow whitespace-nowrap text-xs _outline-filter">
            {isRecording ? (
              <>
                Saving... Please wait
                until the recording is
                done playing.
              </>
            ) : isCooldown ? (
              <>
                Your recording has been
                saved
              </>
            ) : recording !== null ? (
              <>
                Your video now has audio
              </>
            ) : (
              <>
                To save your changes you
                must play the recording
                from start to finish.
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
