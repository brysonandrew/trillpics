import { useMusicInitContext } from "~/pages/video/music/_context/init";

interface ICustomWindow extends Window {
  stream?: MediaStream;
  URL?: {
    createObjectURL(buffer: Blob): void;
    revokeObjectURL(url: string): void;
  };
}

declare const window: ICustomWindow;

export const useRecorderStopHandler
 = () => {
  const { destination } = useMusicInitContext();

  return async (event:Event) => {
    try {
      if (!destination.stream) {
        throw new Error("No stream");
      }
      const tracks = destination.stream.getTracks();

      tracks.forEach(
        (track: MediaStreamTrack) => {
          track.stop();
        }
      );

      console.log(`Stopping stream`);
      delete window.stream;
    } catch (error) {
      const serializedError = error;
      console.error(error);
      // console.log(
      //   `navigator.getUserMedia error:${serializedError?.message?.toString()}`
      // );
    }
  };
};
