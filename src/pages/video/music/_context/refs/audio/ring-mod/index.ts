import { useMemo } from "react";
import {
  TRingModRefs,
  TRingModConnect,
  TRingMod,
  TRingModOptions,
  TRingModParamsKey,
} from "~/pages/video/music/_context/refs/audio/ring-mod/types";

export const RING_MOD_KEY =
  "ring-mod" as const;

export const useSynthRingMods = () => {
  const ref = useMemo(() => {
    const init = (
      context: AudioContext
    ) => {
      const create = (
        options?: TRingModOptions
      ) => {
        return new AudioWorkletNode(
          context,
          RING_MOD_KEY,
          { parameterData: options }
        );
      };

      const recycle = (
        node: AudioWorkletNode
      ): TRingModOptions => {
        return {
          gain: node.parameters.get(
            "gain" as TRingModParamsKey
          )?.value,
          rate: node.parameters.get(
            "rate" as TRingModParamsKey
          )?.value,
          blend: node.parameters.get(
            "blend" as TRingModParamsKey
          )?.value,
          waveform: node.parameters.get(
            "waveform" as TRingModParamsKey
          )?.value,
        };
      };
      const refs: TRingModRefs = {};
      const connect: TRingModConnect = (
        output: AudioNode
      ) => {
        const result: TRingMod = {
          isStarted: false,
          node: create(),
          output,
          start: function (
            startTime?: number
          ) {
            this.isStarted = true;

            return this;
          },
          end: function (
            endTime?: number
          ) {
            this.node.disconnect();
            const prevNode = this.node;
            const nextOptions: TRingModOptions =
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
        key: RING_MOD_KEY,
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
