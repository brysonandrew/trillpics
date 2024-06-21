import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveStepsPerSecond } from "~/hooks/music/time/steps-per-second/resolver";
import { isNumber } from "~/utils/validation/is/number";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import {
  TMusicKey,
  TPlayingKey,
  UStepsKey,
} from "~/store/state/music/types";
import { TState } from "~/store/types";
import {
  IUseMusicLookup,
  TStepValues,
} from "~/hooks/music/types";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useGridCellHandler } from "~/pages/video/music/_context/init/hooks/grid-cell-color";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { useTimer } from "~/hooks/use-timer";
import { TMidiValue } from "~/hooks/music/midis/types";
import { TBeatValue } from "~/hooks/music/beats/types";
import { isNull } from "~/utils/validation/is/null";

type TPlayStepConfig<
  T extends UStepsKey
> = {
  stepValue: number;
  stepIndex: number;
  startTime: number;
  duration: number;
  lookupKey: T;
  loopIndex: number;
};

type TConfig<T extends UStepsKey> = {
  key: TMusicKey;
  keys: readonly T[];
  lookup: Record<T, IUseMusicLookup[T]>;
  record: Record<T, TStepValues>;
  options?: any;
};
export const usePlaySchedule = <
  T extends UStepsKey
>(
  config: TConfig<T>
) => {
  const {
    key,
    keys,
    lookup,
    record,
    options,
  } = config;
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const {
    context,
    audio,
    recorder,
    progress,
  } = useMusicInitContext();
  const {
    bpm,
    playingKeys,
    isLoop,
    sequence,
    set,
  } = useTrillPicsStore(
    ({
      bpm,
      playingKeys,
      isLoop,
      set,
      sequence,
    }) => ({
      bpm,
      playingKeys,
      isLoop,
      sequence,
      set,
    })
  );

  const handleGridCell =
    useGridCellHandler();

  const reset = () => {
    endTimeout();
    handleGridCell();
    progress[key].set(0);
  };
  const [isCooldown, startCooldown] =
    useTimer(1000, reset);

  const audioSeconds =
    useAudioSeconds();
  const videoSeconds =
    usePicVideoReadSeconds();
  const isPlaying =
    playingKeys.includes(key);

  const handleStop = () => {
    console.log("STOP");
    keys.forEach((k) => {
      lookup[k].stop();
    });
    set((prev: TState) => ({
      playingKeys:
        prev.playingKeys.filter(
          (v: TPlayingKey) => v !== key
        ),
    }));
    if (
      recorder.state === "recording"
    ) {
      recorder.stop();
    }
    startCooldown();
  };

  const playStep = (
    config: TPlayStepConfig<T>
  ) => {
    const {
      lookupKey,
      loopIndex,
      startTime,
      stepIndex,
      stepValue,
      duration,
    } = config;
    lookup[lookupKey].play(
      startTime,
      stepValue,
      {
        volume:
          resolvePlayVolume(stepIndex),
        duration,
        stepIndex,
        loopIndex,
        ...options,
      }
    );
  };

  const playLoop = (
    loopIndex: number
  ) => {
    if (
      recorder.state !== "recording"
    ) {
      reset();
      timeoutRef.current = setTimeout(
        () => {
          if (isLoop) {
            playLoop(0);
          } else {
            handleStop();
          }
        },
        audioSeconds * 1000
      );
    }

    keys.forEach((sourceKey) => {
      const steps = record[sourceKey];
      if (!lookup[sourceKey]) return;

      steps.forEach(
        (
          step: TMidiValue | TBeatValue,
          stepIndex,
          { length: stepsCount }
        ) => {

          const sps =
            resolveStepsPerSecond(
              bpm,
              stepsCount
            );
          const currElapsed =
            stepIndex * sps;

          const loopElapsed =
            loopIndex * sps * stepsCount;

          const totalElapsed =
            loopElapsed + currElapsed;

          const startTimeBase =
            context.currentTime +
            totalElapsed;

          if (isNumber(step)) {
            playStep({
              lookupKey: sourceKey,
              loopIndex,
              startTime: startTimeBase,
              stepIndex,
              stepValue: step,
              duration:     (audioSeconds / stepsCount) *
              sequence.duration
            });
            return;
          }

          if (Array.isArray(step)) {
            const subSteps = step;
            subSteps.forEach(
              (
                subStep,
                subStepIndex,
                { length: subStepsCount }
              ) => {
                if (isNull(subStep))
                  return;
                const spss =
                  sps / subStepsCount;
                playStep({
                  lookupKey: sourceKey,
                  loopIndex,
                  startTime:
                    startTimeBase +
                    subStepIndex * spss,
                  stepIndex,
                  stepValue: subStep,
                  duration: sps,
                });
              }
            );
            return;
          }
        }
      );
    });
  };

  const play = async () => {
    const isRecording =
      recorder.state === "recording";

    endTimeout();
    if (isRecording) {
      timeoutRef.current = setTimeout(
        () => {
          handleStop();
        },
        videoSeconds * 1000
      );
      const loops = [
        ...Array(audio.loopCount + 1),
      ];
      loops.forEach((_, loopIndex) => {
        playLoop(loopIndex);
      });
      console.log("RECORDING LOOP");
      return;
    }

    playLoop(0);
  };

  const handlePlay = async () => {
    if (isCooldown) {
      reset();
      return;
    }
    if (isPlaying) {
      handleStop();
      return;
    }
    await context.resume();
    set((prev: TState) => ({
      playingKeys: [
        ...prev.playingKeys,
        key,
      ],
    }));
    play();
  };

  return {
    play: handlePlay,
    stop: handleStop,
    isPlaying,
    isCooldown,
  };
};
