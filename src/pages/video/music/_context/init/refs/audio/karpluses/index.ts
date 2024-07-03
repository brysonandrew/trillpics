import { useMemo } from "react";
import {  TKarplusStrongOptions,  TKarplusStrongOptionsKey,} from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";
import {  TKarplusConnect, TKarplusRefs,  TKarplusStart,} from "~/pages/video/music/_context/init/refs/audio/karpluses/types";
import { NOISE_WHITE_KEY } from "~/pages/video/music/_context/init/refs/audio/noises";
import {  TNoise,  TNoiseKey,  TNoises,} from "~/pages/video/music/_context/init/refs/audio/noises/types";
import { TWorkletKey } from "~/types/worklets";

const key =
  "karplus-strong" as const;

export const useSynthKarpluses = () => {
  const ref = useMemo(() => {
    const init = (
      context: AudioContext,
      noises: TNoises
    ) => {
      const create = (
        options?: TKarplusStrongOptions
      ) => {
        return new AudioWorkletNode(
          context,
          key as TWorkletKey,
          {
            parameterData:
              options as TKarplusStrongOptions,
          }
        );
      };

      const recycle = (
        node: AudioWorkletNode
      ): TKarplusStrongOptions => {
        return {
          gain: node.parameters.get(
            "gain" as TKarplusStrongOptionsKey
          )?.value,
          delayTime:
            node.parameters.get(
              "delayTime" as TKarplusStrongOptionsKey
            )?.value,
        };
      };
      const refs: TKarplusRefs = {};
      const connect:TKarplusConnect = (
        output: AudioNode,
        noiseKey:TNoiseKey = NOISE_WHITE_KEY
      ) => {
        const node = create();

        const noise: TNoise =
          noises.connect(
            noiseKey,
            node
          );

        const start: TKarplusStart = (
          startTime?: number
        ) => {
          noise.start(startTime);
          noise.isStarted = true;
        };

        function handleEnd(
          endTime?: number
        ) {
          this.node.disconnect();
          const prevNode = this.node;
          const nextOptions: TKarplusStrongOptions =
            this.recycle(prevNode);
          this.node = this.create(
            nextOptions
          );
          return this;
        }

        return {
          node,
          input: noise,
          output,
          start,
          end: (endTime?: number) => {
            noise.end(endTime);
            handleEnd(endTime);
          },
        } as const;
      };

      return {
        key,
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
