import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const useRecorderDataAvailableHandler =
  () => {
    const { audio:{save} } =
      useMusicRefs();
    const handler = (
      event: BlobEvent
    ) => {
      console.log(
        "audio.recorder.ondataavailable "
      );
      console.dir(event);
      if (event.data?.size > 0) {
        save.chunks = [
          ...save.chunks,
          event.data,
        ];
      }
    };

    return handler;
  };
