import { useMemo } from "react";
import { TBiquadRefs } from "~/pages/video/music/_context/refs/audio/biquads/types";

export const useMusicInitRefsBiquads =
  () => {
    const handler = useMemo(() => {
      const init = (
        context: AudioContext
      ) => {
        const create = (
          options: BiquadFilterOptions
        ) =>
          new BiquadFilterNode(
            context,
            options
          );

        const recycle = (
          node: BiquadFilterNode
        ): BiquadFilterOptions => {
          return {
            frequency:
              node.frequency.value,
            detune: node.detune.value,
            Q: node.Q.value,
            type: node.type,
          };
        };
        const refs: TBiquadRefs = {};
        const connect = (
          output: AudioNode,
          options: BiquadFilterOptions = {
            type: "lowpass",
            frequency: 500,
          }
        ) => {
          const filter =
            create(options);
          filter.connect(output);
          return filter;
        };
        return {
          key: "filter",
          create,
          recycle,
          connect,
          refs,
        };
      };
      return init;
    }, []);

    return handler;
  };
