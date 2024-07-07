import { useMemo } from "react";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import {
  TKarplusOptions,
  TKarplusParamsKey,
} from "~/pages/video/music/synth/nodes/karplus/types";
import {
  TKarplusConnect,
  TKarplusRefs,
} from "~/pages/video/music/_context/refs/audio/karpluses/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";
import {
  TNoise,
  TNoiseKey,
  TNoises,
} from "~/pages/video/music/_context/refs/audio/noises/types";
import { TWorkletKey } from "~/types/worklets";

export const useSynthKarpluses = () => {
  const ref = useMemo(() => {
    const init = (
      context: AudioContext,
      noises: TNoises
    ) => {
      const create = (
        options?: TKarplusOptions
      ) => {
        return new AudioWorkletNode(
          context,
          KARPLUS_KEY as TWorkletKey,
          {
            parameterData:
              options as TKarplusOptions,
          }
        );
      };

      const recycle = (
        node: AudioWorkletNode
      ): TKarplusOptions => {
        return {
          gain: node.parameters.get(
            "gain" as TKarplusParamsKey
          )?.value,
          delayTime:
            node.parameters.get(
              "delayTime" as TKarplusParamsKey
            )?.value,
        };
      };
      const refs: TKarplusRefs = {};
      const connect: TKarplusConnect = (
        output: AudioNode,
        noiseKey: TNoiseKey = WHITE_NOISE_KEY,
        options?: TKarplusOptions
      ) => {
        const node = create(options);

        const noise: TNoise =
          noises.connect(
            noiseKey,
            node
          );

        return {
          node,
          input: noise,
          output,
          isStarted: false,
          start: function (
            startTime?: number
          ) {
            this.node.isStarted = true;
            return this;
          },
          end: function (
            endTime?: number
          ) {
            this.input.end(endTime);
            this.node.disconnect();
            const prevNode = this.node;
            const nextOptions: TKarplusOptions =
              recycle(prevNode);
            this.node = create(
              nextOptions
            );
            this.node.isStarted = false;
            return this;
          },
        } as const;
      };

      return {
        key: KARPLUS_KEY,
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
