import { useMemo } from "react";
import {
  TBitcrusherOptions,
  TBitcrusherOptionsKey,
  TBitcrusherRefs,
  TBitcrusherConnect,
  TBitcrusher,
} from "~/pages/video/music/_context/refs/audio/bitcrusher/types";

export const BITCRUSHER_KEY =
  "bitcrusher" as const;

export const useSynthBitcrushers =
  () => {
    const ref = useMemo(() => {
      const init = (
        context: AudioContext
      ) => {
        const create = (
          options?: TBitcrusherOptions
        ) => {
          return new AudioWorkletNode(
            context,
            BITCRUSHER_KEY,
            { parameterData: options }
          );
        };

        const recycle = (
          node: AudioWorkletNode
        ): TBitcrusherOptions => {
          return {
            frequency:
              node.parameters.get(
                "frequency" as TBitcrusherOptionsKey
              )?.value,
            bits: node.parameters.get(
              "bits" as TBitcrusherOptionsKey
            )?.value,
          };
        };
        const refs: TBitcrusherRefs =
          {};
        const connect: TBitcrusherConnect =
          (output: AudioNode) => {
            const result: TBitcrusher = {
              isStarted: false,
              node: create(),
              output,
              start: function (
                startTime?: number
              ) {
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
                const prevNode =
                  this.node;
                const nextOptions: TBitcrusherOptions =
                  recycle(prevNode);
                this.node = create(
                  nextOptions
                );
                this.isStarted = false;
                return this;
              },
            };

            return result;
          };

        return {
          keys: BITCRUSHER_KEY,
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
