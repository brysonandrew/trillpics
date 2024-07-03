import { useMemo } from "react";
import {
  TNoiseRefs,
  TNoise,
  TNoiseOptions,
  TNoiseOptionsKey,
  TNoiseKey,
  TNoiseConnect,
} from "~/pages/video/music/_context/init/refs/audio/noises/types";

export const NOISE_WHITE_KEY =
  "noise-white" as const;
export const NOISE_PINK_KEY =
  "noise-pink" as const;

export const NOISE_KEYS = [
  NOISE_WHITE_KEY,
  NOISE_PINK_KEY,
] as const;

export const useSynthNoises = () => {
  const ref = useMemo(() => {
    const init = (
      context: AudioContext
    ) => {
      const create = (
        key: TNoiseKey,
        options?: TNoiseOptions
      ) => {
        return new AudioWorkletNode(
          context,
          key,
          { parameterData: options }
        );
      };

      const recycle = (
        node: AudioWorkletNode
      ): TNoiseOptions => {
        return {
          gain: node.parameters.get(
            "gain" as TNoiseOptionsKey
          )?.value,
        };
      };
      const refs: TNoiseRefs = {};
      const connect:TNoiseConnect = (
        key: TNoiseKey,
        output: AudioNode
      ) => {
        const node: TNoise = {
          isStarted: false,
          node: create(key),
          output,
          start: function (
            startTime?: number
          ) {
            this.node.port.postMessage(
              startTime
            );
          },
          end: function (
            endTime?: number
          ) {
            this.node.disconnect();
            const prevNode = this.node;
            const nextOptions: TNoiseOptions =
              this.recycle(prevNode);
            this.node = this.create(
              nextOptions
            );
            this.isStarted = false;
            return this;
          },
        };

        return node;
      };

      return {
        keys: NOISE_KEYS,
        create,
        connect,
        recycle,
        refs,
      };
    };
    return init;
  }, []);

  return ref;
};
