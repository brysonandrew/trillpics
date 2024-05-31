import { useSoundContext } from "~/shell/global/sound";

interface ICustomWindow extends Window {
  stream?: MediaStream;
  URL?: {
    createObjectURL(buffer: Blob): void;
    revokeObjectURL(url: string): void;
  };
}

declare const window: ICustomWindow;

export const useStop = () => {
  const { sound } = useSoundContext();

  return async () => {
    try {
      if (!sound.destination.stream) {
        throw new Error("No stream");
      }
      const tracks = sound.destination.stream.getTracks();

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
