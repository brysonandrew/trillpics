import {
  TMidiValue,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import { useTimeouts } from "~/hooks/timeout-refs";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import {
  resolveMidiNumber,
  resolveMidiNormalDelta,
} from "~/utils/midi";
import {
  hzToMidi,
  midiToHz,
} from "~/utils/music";

export const useBasicOscillatorStart =
  () => {
    const { oscillator } =
      useContextMusicInit();
    const { timeouts, end, endOne } =
      useTimeouts();
    const { sequence } =
      useTrillPicsStore(
        ({ sequence }) => ({
          sequence,
        })
      );
    const start = (
      _startTime: number,
      stepMidi: TMidiValue,
      config: TPlayMidisOptions
    ) => {
      if (!oscillator.isStarted) {
        oscillator.isStarted = true;
        oscillator.node.start(
          _startTime
        );
      }

      if (!config.schedule) {
        const nextMidi =
          resolveMidiNumber(stepMidi);
        const nextHz =
          midiToHz(nextMidi);
        oscillator.node.frequency.value =
          nextHz;
        return;
      }
      const {
        steps,
        stepIndex,
        duration,
      } = config.schedule;

      const intervalDuration =
        duration * stepIndex;

      if (
        stepIndex %
          sequence.interval !==
        0
      )
        return;

      endOne(stepIndex);
      const timeout = window.setTimeout(
        () => {
          const currHz =
            oscillator.node.frequency
              .value;
          const currMidi =
            hzToMidi(currHz);

          const deltaMidi =
            resolveMidiNormalDelta(
              steps,
              stepIndex
            );
          const nextHz = midiToHz(
            currMidi + deltaMidi
          );
          oscillator.node.frequency.value =
            nextHz;

          oscillator.prevHz =
            oscillator.node.frequency.value;
        },
        intervalDuration * 1000
      );
      timeouts[stepIndex] = timeout;
    };

    const stop = () => {
      end();
      oscillator.node.stop();
      const prevNode = oscillator.node;
      const nextOptions: OscillatorOptions =
        oscillator.recycle(prevNode);
      oscillator.node =
        oscillator.create(nextOptions);
      oscillator.isStarted = false;
    };
    return {
      start,
      stop,
    };
  };
