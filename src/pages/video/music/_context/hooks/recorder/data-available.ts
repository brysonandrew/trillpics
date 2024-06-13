import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const useRecorderDataAvailableHandler =
  () => {
    const { audio } =
      useMusicInitContext();
    const handler = (
      event: BlobEvent
    ) => {
      console.log(
        "audio.recorder.ondataavailable "
      );
      console.dir(event);
      if (event.data?.size > 0) {
        audio.chunks = [
          ...audio.chunks,
          event.data,
        ];
      }
    };

    return handler;
  };
