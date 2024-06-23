import {
  TMidiValue,
  TPlayNodesOptions,
} from "~/hooks/music/midis/types";
import { TStepValues } from "~/hooks/music/types";
import { useTimeouts } from "~/hooks/timeout-refs";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import {
  hzToMidi,
  midiToHz,
} from "~/utils/music";

const resolveNumber = (
  midiValue: TMidiValue
): number => {
  if (midiValue === null) return 0;
  if (Array.isArray(midiValue))
    return midiValue.reduce(
      (a: number, c) =>
        a + (c === null ? 0 : c),
      0
    );
  return midiValue;
};
const resolveNormalDelta = (
  steps: TStepValues,
  stepIndex: number
) => {
  const prevIndex =
    stepIndex === 0
      ? steps.length - 1
      : stepIndex - 1;
  const prev = resolveNumber(
    steps[prevIndex]
  );
  const curr = resolveNumber(
    steps[stepIndex]
  );

  const deltaMidi = curr - prev;

  return deltaMidi;
};
export const useBasicOscillatorStart =
  () => {
    const { audio, oscillator } =
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
      config: TPlayNodesOptions
    ) => {
      const {
        steps,
        startTime: _startTime,
        stepIndex,
        duration,
      } = config;

      const intervalDuration =
        duration * stepIndex;
      const startTime =
        _startTime + intervalDuration;
      if (!oscillator.isStarted) {
        oscillator.isStarted = true;
        oscillator.node.start(
          _startTime
        );
      }
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
            resolveNormalDelta(
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
