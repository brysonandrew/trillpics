import { useMemo } from "react";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { TOscillatorParamKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import {
  TOscillator,
  TOscillatorRefs,
} from "~/pages/video/music/_context/refs/audio/oscillators/types";

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
          const node = create(options);
          node.connect(output);
          const oscillator: TOscillator =
            {
              isStarted: false,
              node,
              output,
              start: function (
                startTime?: number
              ) {
                this.node.start(
                  startTime
                );
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
                  recycle(prevNode);
                this.node = create(
                  nextOptions
                );
                this.node.connect(
                  output
                );
                this.isStarted = false;
                return this;
              },
            };

          return oscillator;
        };

        return {
          key: OSCILLATOR_KEY,
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
