import { useMemo } from "react";
import {
  TOscillator,
  TOscillatorRefs,
} from "~/pages/video/music/_context/init/refs/audio/oscillators/types";

const key = "oscillator";
export const useSynthOscillators =
  () => {
    const ref = useMemo(() => {
      const init = (
        context: AudioContext
      ) => {
        const create = (
          options: OscillatorOptions
        ) =>
          new OscillatorNode(
            context,
            options
          );
        const recycle = (
          node: OscillatorNode
        ): OscillatorOptions => {
          return {
            type: node.type,
            frequency:
              node.frequency.value,
            detune: node.detune.value,
          };
        };
        const refs: TOscillatorRefs =
          {};

        const connect = (
          output: AudioNode,
          options: OscillatorOptions = {
            type: "sawtooth" as const,
            frequency: 120,
          }
        ) => {
          const oscillator: TOscillator =
            {
              isStarted: false,
              node: create(options),
              output,
              start:function (
                startTime?: number
              ) {
                this.node.start(startTime);
                this.isStarted = true;
                return this;
              },
              end: function (
                endTime?: number
              ) {
                this.node.stop(endTime);
                const prevNode =
                  this.node;
                const nextOptions: OscillatorOptions =
                  recycle(
                    prevNode
                  );
                this.node = create(
                  nextOptions
                );
                this.isStarted = false;
                return this;
              },
            };

          return oscillator;
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
