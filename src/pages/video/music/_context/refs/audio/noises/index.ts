import { useMemo } from "react";
import { key } from "localforage";
import { create } from "zustand";
import {
  TNoiseRefs,
  TNoise,
  TNoiseOptions,
  TNoiseOptionsKey,
  TNoiseKey,
  TNoiseConnect,
} from "~/pages/video/music/_context/refs/audio/noises/types";

export const WHITE_NOISE =
  "white-noise" as const;
export const NOISE_PINK_KEY =
  "pink-noise" as const;

export const NOISE_KEYS = [
  WHITE_NOISE,
  NOISE_PINK_KEY,
] as const;

export const useSynthNoises = () => {
  const ref = useMemo(() => {
    const init = (
      context: AudioContext
    ) => {
      const create = (
        key:TNoiseKey = WHITE_NOISE,
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
      const connect: TNoiseConnect = (
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
            console.log(startTime);
            this.node.port.postMessage(
              startTime
            );
            this.isStarted = true;
            return this;
          },
          end: function (
            endTime?: number
          ) {
            this.node.disconnect();
            const prevNode = this.node;
            const nextOptions: TNoiseOptions =
              recycle(prevNode);
            this.node = create(
              WHITE_NOISE,
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
