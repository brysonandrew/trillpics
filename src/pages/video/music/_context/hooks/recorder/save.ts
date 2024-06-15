import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { supportedMimeTypes } from "~/pages/video/music/_context/hooks/recorder/supportedMimeTypes";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { STEPS_COUNT } from "~/constants/music/steps";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { set } from "zod";

export const useRecorderSaveHandler =
  () => {
    const { set, bpm } =
      useTrillPicsStore(
        ({ set, bpm }) => ({
          set,
          bpm,
        })
      );
    const seconds =
      usePicVideoReadSeconds();

    const { audio } =
      useMusicInitContext();

    const handler = (event: Event) => {
      const audioBlob = new Blob(
        audio.chunks,
        {
          type:
            supportedMimeTypes()[0] ??
            "recording/webm",
          //,
        }
      );

      set((draft: TState) => {
        if (draft.recording) {
          window.URL.revokeObjectURL(
            draft.recording.src
          );
        }
        const url =
          window.URL.createObjectURL(
            audioBlob
          );

        draft.recording = {
          src: url,
          seconds,
        };
      });

      console.log(
        `Recorder stopped: Recorded chunks: ${audio.chunks.length}`
      );
    };

    return handler;
  };
