import { useMemo } from "react";
import {
  TOscillator,
  TOscillatorRefs,
} from "~/pages/video/music/_context/init/refs/audio/oscillators/types";

const key = 'oscillator'
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

        const options = {
          type: "sawtooth" as const,
          frequency: 120,
        };

        const connect = (
          output: AudioNode
        ) => {
          const oscillator: TOscillator =
            {
              isStarted: false,
              node: create(options),
              output,
              end: function (
                endTime?: number
              ) {
                this.node.stop(
                  endTime
                );
                const prevNode =
                  this.node;
                const nextOptions: OscillatorOptions =
                  this.recycle(
                    prevNode
                  );
                this.node =
                  this.create(
                    nextOptions
                  );
                this.isStarted =
                  false;
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
