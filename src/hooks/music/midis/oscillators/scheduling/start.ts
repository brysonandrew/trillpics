import { useMemo } from "react";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { key } from "localforage";
import { TBeatsKey } from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
type THandlerConfig = {
  stepIndex: number;
  startTime: number;
  output: AudioNode;
};
export const useBasicOscillatorStart =
  () => {
    const {
      set,
      bpm,
      synth,
      sequence,
    } = useTrillPicsStore(
      ({
        set,
        bpm,
        synth,
        sequence,
      }) => ({
        set,
        bpm,
        synth,
        sequence,
      })
    );
    const timeoutsRef = useMemo<{
      current: ReturnType<
        typeof window.setTimeout
      >[];
    }>(() => {
      return {
        current: [],
      };
    }, []);
    const handler = (
      oscillator: OscillatorNode,
      frequency: number,
      stepIndex: number,
      _startTime: number,
      duration: number
    ) => {
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
      const timeout = setTimeout(() => {
        oscillator.frequency.linearRampToValueAtTime(
          frequency,
          _startTime
        );
        // frequency;
      }, intervalDuration * 1000);
      timeoutsRef.current.push(timeout);
    };
    return handler;
  };
