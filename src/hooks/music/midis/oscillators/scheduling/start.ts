import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
type THandlerConfig = {
  stepIndex: number;
  startTime: number;
  // output: AudioNode;
  // oscillator: OscillatorNode,
  frequency: number;
  duration: number;
};
export const useBasicOscillatorStart =
  () => {
    const { audio } =
      useMusicInitContext();
    const { timeoutRef, endTimeout } =
      useTimeoutRef();
    const { sequence } =
      useTrillPicsStore(
        ({ sequence }) => ({
          sequence,
        })
      );

    const handler = (
      config: THandlerConfig
    ) => {
      const {
        startTime: _startTime,
        stepIndex,
        duration,
        frequency,
      } = config;
      console.log(config);
      if (
        stepIndex %
          sequence.interval !==
        0
      )
        return;
      const intervalDuration =
        duration * stepIndex;

      const startTime =
        _startTime + intervalDuration;
      endTimeout();
      timeoutRef.current = setTimeout(
        () => {
          audio.oscillator.node.frequency.linearRampToValueAtTime(
            frequency,
            _startTime
          );
          // frequency;
        },
        intervalDuration * 1000
      );
      // timeoutsRef.current.push(timeout);
    };

    const stop = () => {
      endTimeout();
    };
    return { start: handler, stop };
  };
