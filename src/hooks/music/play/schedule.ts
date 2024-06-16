import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
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
  const { bpm, playingKeys, set } =
    useTrillPicsStore(
      ({ bpm, playingKeys, set }) => ({
        bpm,
        playingKeys,
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

  const play = async () => {
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
    let elapsed = 0;
    const seconds =
      recorder.state === "recording"
        ? videoSeconds
        : audioSeconds;

    timeoutRef.current = setTimeout(
      () => {
        handleStop();
      },
      seconds * 1000
    );

    const loops = [
      ...Array(
        recorder.state === "recording"
          ? audio.loopCount + 1
          : 1
      ),
    ];
    loops.forEach((_, loopIndex) => {
      keys.forEach((sourceKey) => {
        const steps = record[sourceKey];

        if (!lookup[sourceKey]) return;
        steps.forEach(
          (
            step,
            stepIndex,
            { length: stepCount }
          ) => {
            const sps =
              resolveStepsPerSecond(
                bpm,
                stepCount
              );

            const currElapsed =
              stepIndex * sps;

            const loopElapsed =
              loopIndex *
              sps *
              stepCount;

            elapsed =
              loopElapsed + currElapsed;

            if (isNumber(step)) {
              const start =
                context.currentTime +
                elapsed;
              lookup[sourceKey].play(
                start,
                step,
                {
                  volume:
                    resolvePlayVolume(
                      stepIndex
                    ),
                  duration: sps,
                  ...options,
                }
              );
            }
          }
        );
      });
    });
  };

  return {
    play,
    stop: handleStop,
    isPlaying: isPlaying,
    isCooldown,
  };
};
