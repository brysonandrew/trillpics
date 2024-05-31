import { useContext } from "@state/app/Context";

import { serializeError } from "serialize-error";

interface ICustomWindow extends Window {
  stream?: MediaStream;
  URL?: {
    createObjectURL(buffer: Blob): void;
    revokeObjectURL(url: string): void;
  };
}

declare const window: ICustomWindow;

export const useStop = () => {
  const { log, stream } = useContext();

  return async () => {
    try {
      if (!stream) {
        throw new Error("No stream");
      }
      const tracks = stream.getTracks();

      tracks.forEach((track: MediaStreamTrack) => {
        track.stop();
      });

      log(`Stopping stream`);
      delete window.stream;
    } catch (error) {
      const serializedError = serializeError(error);
      console.error(error);
      log(
        `navigator.getUserMedia error:${serializedError?.message?.toString()}`
      );
    }
  };
};
