import { useMusicRefs } from "~/pages/video/music/_context/init";
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
import { IUseMusicLookup } from "~/hooks/music/types";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { useTimer } from "~/hooks/use-timer";
import {
  TMidiValue,
  TMidiValues,
} from "~/hooks/music/midis/types";
import {
  TBeatValue,
  TBeatValues,
} from "~/hooks/music/beats/types";
import { isNull } from "~/utils/validation/is/null";
import {
  isBeatsKey,
  isMidisKey,
} from "~/hooks/music/play/validators";
import { useGridDrill } from "~/hooks/grid/drill";

export type TPlayStepSchedule<
  T extends UStepsKey
> = {
  steps: TMidiValues;
  stepValue: number;
  stepIndex: number;
  stepsCount: number;
  startTime: number;
  duration: number;
  lookupKey: T;
  loopIndex: number;
};

type TConfig<T extends UStepsKey> = {
  key: TMusicKey;
  keys: readonly T[];
  lookup: Record<T, IUseMusicLookup[T]>;
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
    // record,
    options,
  } = config;
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const {
    audio: {
      context,
      save: { recorder },
    },
    progress,
    schedule,
  } = useMusicRefs();
  const {
    // bpm,
    playingKeys,
    isLoop,
    // sequence,
    set,
  } = useTrillPicsStore(
    ({
      // bpm,
      playingKeys,
      isLoop,
      set,
      // sequence,
    }) => ({
      // bpm,
      playingKeys,
      isLoop,
      // sequence,
      set,
    })
  );

  const handleGridCell = useGridDrill();

  const reset = () => {
    endTimeout();
    handleGridCell();
    console.log(key);
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
    reset();
    startCooldown();
  };

  const playStep = (
    schedule: TPlayStepSchedule<T>
  ) => {
    const {
      startTime,
      stepValue,
      lookupKey,
      stepIndex,
      ...rest
    } = schedule;
    lookup[lookupKey].play(
      startTime,
      stepValue,
      {
        volume:
          resolvePlayVolume(stepIndex),
        ...options,
        schedule,
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
      let steps:
        | TMidiValues
        | TBeatValues = [];
      if (isMidisKey(sourceKey)) {
        steps = [
          ...schedule.record.steps,
        ];
      }
      if (isBeatsKey(sourceKey)) {
        const preset =
          schedule.record.presets[
            schedule.record.presetKey
          ];
        console.log(
          preset,
          schedule.record
        );
        steps = preset[sourceKey];
      }

      if (!lookup[sourceKey]) return;

      steps.forEach(
        (
          step: TMidiValue | TBeatValue,
          stepIndex,
          { length: stepsCount }
        ) => {
          const sps =
            resolveStepsPerSecond(
             schedule.record.bpm,
              stepsCount
            );
          const currElapsed =
            stepIndex * sps;

          const loopElapsed =
            loopIndex *
            sps *
            stepsCount;

          const totalElapsed =
            loopElapsed + currElapsed;

          const startTimeBase =
            context.currentTime +
            totalElapsed;
          const sharedConfig = {
            lookupKey: sourceKey,
            stepsCount,
            loopIndex,
            stepIndex,
            steps,
          } as const;
          if (isNumber(step)) {
            playStep({
              startTime: startTimeBase,
              stepValue: step,
              duration:
                (audioSeconds /
                  stepsCount) *
                schedule.record.sequence
                  .duration,
              ...sharedConfig,
            });
            return;
          }

          if (Array.isArray(step)) {
            const subSteps = step;
            subSteps.forEach(
              (
                subStep,
                subStepIndex,
                {
                  length: subStepsCount,
                }
              ) => {
                if (isNull(subStep))
                  return;
                const spss =
                  sps / subStepsCount;
                playStep({
                  startTime:
                    startTimeBase +
                    subStepIndex * spss,
                  stepValue: subStep,
                  duration: sps,
                  ...sharedConfig,
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
        ...Array(
          schedule.loopCount + 1
        ),
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
