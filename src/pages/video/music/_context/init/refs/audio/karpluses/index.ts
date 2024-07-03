import { useMemo } from "react";
import {
  TKarplusStrongOptions,
  TKarplusStrongOptionsKey,
} from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";
import {
  TKarplus,
  TKarplusRefs,
} from "~/pages/video/music/_context/init/refs/audio/karpluses/types";
import { TWorkletKey } from "~/types/worklets";

const key = "karplus-strong" as TWorkletKey

export const useSynthKarpluses = () => {
  const ref = useMemo(() => {
    const init = (
      context: AudioContext
    ) => {
      const create = (
        options?: TKarplusStrongOptions
      ) =>
        new AudioWorkletNode(
          context,
          key ,
          { parameterData: options }
        );
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
      const connect = (
        output: AudioNode
      ) => {
        const karplus: TKarplus = {
          node: create(),
          end: function () {
            this.node.disconnect();
            const prevNode =
              this.node;
            const nextOptions: TKarplusStrongOptions =
              this.recycle(
                prevNode
              );
            this.node =
              this.create(
                nextOptions
              );
            return this;
          },
          output,
        };

        return karplus;
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
