import { useMemo } from "react";
import {
  TNoiseRefs,
  TNoise,
  TNoiseOptions,
  TNoiseOptionsKey,
  TNoiseKey,
  TNoiseConnect,
} from "~/pages/video/music/_context/refs/audio/noises/types";

export const WHITE_NOISE_KEY =
  "white-noise" as const;
export const PINK_NOISE_KEY =
  "pink-noise" as const;

export const NOISE_KEYS = [
  WHITE_NOISE_KEY,
  PINK_NOISE_KEY,
] as const;

export const useSynthNoises = () => {
  const ref = useMemo(() => {
    const init = (
      context: AudioContext
    ) => {
      const create = (
        key: TNoiseKey = WHITE_NOISE_KEY,
        parameterData?: TNoiseOptions
      ) => {
        return new AudioWorkletNode(
          context,
          key,
          { parameterData }
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
      const connect: TNoiseConnect = (
        key: TNoiseKey,
        output: AudioNode,
        options?: TNoiseOptions
      ) => {
        const node = create(
          key,
          options
        );

        const noise: TNoise = {
          isStarted: false,
          node,
          output,
          start: function (
            startTime?: number
          ) {
            node.connect(output);
            this.isStarted = true;
            return this;
          },
          end: function (
            endTime?: number
          ) {
            node.disconnect(output);
            const nextOptions: TNoiseOptions =
              recycle(node);
            this.node = create(
              WHITE_NOISE_KEY,
              nextOptions
            );
            this.isStarted = false;
            return this;
          },
        };

        return noise;
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
