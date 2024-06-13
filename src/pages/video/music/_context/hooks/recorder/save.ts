import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { supportedMimeTypes } from "~/pages/video/music/_context/hooks/recorder/supportedMimeTypes";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useRecorderSaveHandler =
  () => {
    const { set } = useTrillPicsStore(
      ({ set }) => ({
        set,
      })
    );

    const { audio } =
      useMusicInitContext();

    const handler = (event: Event) => {
      console.log("recorder.onstop ");
      console.dir(event);
      console.log(audio.chunks);
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
          seconds: (draft.bpm / 60) * 8,
        };
      });

      console.log(
        `Recorder stopped: Recorded chunks: ${audio.chunks.length}`
      );
    };

    return handler;
  };
