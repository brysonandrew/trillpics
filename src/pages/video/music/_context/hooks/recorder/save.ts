import { useMusicRefs } from "~/pages/video/music/_context/init";
import { supportedMimeTypes } from "~/pages/video/music/_context/hooks/recorder/mime-types";

export const useRecorderSaveHandler =
  () => {
    const {
      audio: { save },
    } = useMusicRefs();

    const handler = (event: Event) => {
      const audioBlob = new Blob(
        save.chunks,
        {
          type:
            supportedMimeTypes()[0] ??
            "recording/webm",
          //,
        }
      );

      // set((draft: TState) => {
      //   if (draft.recording) {
      //     window.URL.revokeObjectURL(
      //       draft.recording.src
      //     );
      //   }
      //   const url =
      //     window.URL.createObjectURL(
      //       audioBlob
      //     );

      //   draft.recording = {
      //     src: url,
      //     seconds:videoSeconds,
      //   };
      // });

      console.log(
        `Recorder stopped: Recorded chunks: ${save.chunks.length}`
      );
    };

    return handler;
  };
