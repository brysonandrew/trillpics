import { useState } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
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
import { set } from "zod";

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
  const { key, keys, lookup, options } =
    config;

  const [playingKeys, setPlayingKeys] =
    useState<string[]>([]);
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

  const isLoop = true;
  const handleGridCell = useGridDrill();

  const reset = () => {
    endTimeout();
    handleGridCell();
    progress[key].set(0);
  };
  const videoSeconds =
    usePicVideoReadSeconds();
  const isPlaying =
    playingKeys.includes(key);
  // schedule.record.playingKeys.includes(
  //   key
  // );

  const handleStop = () => {
    keys.forEach((k) => {
      lookup[k].stop();
    });
    schedule.record.playingKeys =
      schedule.record.playingKeys.filter(
        (v) => v !== key
      );
    setPlayingKeys(
      schedule.record.playingKeys
    );
    if (
      recorder.state === "recording"
    ) {
      recorder.stop();
    }
    reset();
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
        steps = preset[sourceKey];
      }

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
          resolveStepsPerSecond(
            schedule.record.bpm
          ) *
            steps.length *
            1000
        );
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
                ((resolveStepsPerSecond(
                  schedule.record.bpm
                ) *
                  stepsCount) /
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
      return;
    }

    playLoop(0);
  };

  const handlePlay = async () => {
    if (isPlaying) {
      handleStop();
      return;
    }
    await context.resume();

    schedule.record.playingKeys = [
      ...schedule.record.playingKeys,
      key,
    ];
    setPlayingKeys(
      schedule.record.playingKeys
    );

    play();
  };

  return {
    play: handlePlay,
    stop: handleStop,
    isPlaying,
  };
};
