import {
  TMidiValue,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import { useTimeouts } from "~/hooks/timeout-refs";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import {
  resolveMidiNormalDelta,
  resolveMidiNumber,
} from "~/utils/midi";

export const useSchedulingStart =
  () => {
    const { schedule } = useMusicRefs();
    const { timeouts, end, endOne } =
      useTimeouts();
    const { bpm } = schedule.record;

    const start = (
      startTime: number,
      stepMidi: TMidiValue,
      config: TPlayMidisOptions,
      setFrequency: (
        deltaMidi: number,
        stepDuration: number,
        intervalDuration?: number
      ) => void,
      endSource: (time?: number) => void
    ) => {
      if (!config.schedule) {
        const nextMidi =
          resolveMidiNumber(stepMidi);
        setFrequency(
          nextMidi,
          config.duration ?? 1
        );
        return;
      }

      const duration =
        config.duration ??
        schedule.record.sequence
          .duration;
      const stepIndex =
        config.schedule.stepIndex ?? 0;
      const steps =
        config.schedule.steps;
      const stepDuration =
        (1 / 4 / bpm) * 60;
      // schedule.record.sequence
      //   .interval
      const intervalDuration =
        stepDuration *
        config.schedule.stepIndex;

      if (
        config.schedule.stepIndex %
          schedule.record.sequence
            .interval !==
        0
      )
        return;

      const deltaMidi =
        resolveMidiNormalDelta(
          steps,
          stepIndex
        );
      if (
        schedule.record.synth.mode ===
        "isolated"
      ) {
        setFrequency(
          deltaMidi,
          stepDuration,
          intervalDuration
        );
        endSource(
          startTime + stepDuration
        );
        return null;
      }
      if (
        schedule.record.synth.mode ===
        "continuous"
      ) {
        endOne(
          config.schedule.stepIndex
        );
        const timeout =
          window.setTimeout(
            () =>
              setFrequency(
                deltaMidi,
                stepDuration,
                intervalDuration
              ),
            intervalDuration * 1000
          );
        timeouts[stepIndex] = timeout;
      }
    };

    const stop = () => {
      end();
    };
    return {
      start,
      stop,
    };
  };
