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
          gap: box._025,
          width: width,
          paddingTop: box._05-box._0125,
          paddingBottom: box._05+box._0125,
          ...boxPx(box._05 - box._00625),
        }}
      >
        <div
          className="row relative"
          style={{
            gap: box._0125,
            left: box._05 - box._025,
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
            style={{ width: box._ }}
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
