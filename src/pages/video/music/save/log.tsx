import type { FC } from "react";
import { IconsAlert } from "~/components/icons/alert";
import { IconsSave } from "~/components/icons/save";
import { IconsVideo } from "~/components/icons/video/video";
import { box } from "~uno/rules/box";
import { useVideoStyle } from "~/pages/video/style";
import { useTrillPicsStore } from "~/store/middleware";
import { useContextMusicRecorder } from "~/pages/video/music/_context/recorder";
import { boxPx } from "~/utils/box/px";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";

export const VideoMusicSaveSaveLog: FC =
  () => {
    

    const { recording } =
      useTrillPicsStore(
        ({ recording }) => ({
          recording,
        })
      );

    const { width } = useVideoStyle();

    const { isRecording, isCooldown } =
      useContextMusicRecorder();
    return (
      <div
        className="relative row uppercase font-sans"
        style={{
          left: 0,
          gap: box.m025,
          width: width,
          paddingTop: box.m05-box.m0125,
          paddingBottom: box.m05+box.m0125,
          ...boxPx(box.m05 - box.m00625),
        }}
      >
        <div
          className="row relative"
          style={{
            gap: box.m0125,
            left: box.m05 - box.m025,
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
            style={{ width: box.m }}
          />
          <div className="grow whitespace-nowrap text-xs _sf-outline">
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
