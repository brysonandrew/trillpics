import { useMemo } from "react";

export const useMusicRefsSave =
  () => {
    const nodes = useMemo(() => {
      const init = (
        context: AudioContext,
        destination: MediaStreamAudioDestinationNode
      ) => {
        const recorder =
          new MediaRecorder(
            destination.stream
          );
        const chunks: Blob[] = [];

        const arrayBuffer: ArrayBuffer =
          new Float32Array();

        return {
          loopCount: 0,
          loopsRemainder: 0,
          context,
          destination,
          recorder,
          chunks,
          arrayBuffer,
        };
      };
      return init;
    }, []);

    return nodes;
  };
