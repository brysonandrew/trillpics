import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { isNumber } from "~/utils/validation/is/number";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import {
  TMusicKey,
  TPlayingKey,
  TStepsKey,
  UStepsKey,
} from "~/store/state/music/types";
import { TState } from "~/store/types";
import {
  IUseMusicLookup,
  TStepValues,
} from "~/hooks/music/types";

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
  const { context, audio, recorder } =
    useMusicInitContext();
  const {
    bpm,
    synth,
    playingKeys,
    set,
  } = useTrillPicsStore(
    ({
      bpm,
      synth,
      playingKeys,
      set,
    }) => ({
      bpm,
      synth,
      playingKeys,
      set,
    })
  );
  const { isRecording } =
    useMusicRecorderContext();

  const isPlaying =
    playingKeys.includes(key);

  const handleStop = () => {
    set((prev: TState) => ({
      playingKeys:
        prev.playingKeys.filter(
          (v: TPlayingKey) => v !== key
        ),
    }));
    keys.forEach((k) => {
      lookup[k].stop();
    });
  };

  const play = async () => {
    await context.resume();
    set((prev: TState) => ({
      playingKeys: [
        ...prev.playingKeys,
        key,
      ],
    }));
    let elapsed = 0;

    console.log(
      recorder.state,
      isRecording
    );
    [
      ...Array(
        recorder.state === "recording"
          ? audio.loopCount + 1
          : 1
      ),
    ].forEach(
      (
        _,
        loopIndex,
        { length: loopCount }
      ) => {
        keys.forEach((sourceKey) => {
          const steps =
            record[sourceKey];

          const sps =
            resolveStepsPerSecond(
              bpm,
              steps.length
            );
          const remainderSteps =
            Math.floor(
              audio.loopsRemainder / sps
            );

          if (!lookup[sourceKey])
            return;
          steps.forEach(
            (
              step,
              stepIndex,
              { length: stepCount }
            ) => {
              if (
                loopIndex ===
                audio.loopCount
              ) {
                console.log(
                  "LAST",
                  stepIndex
                );
                if (
                  remainderSteps ===
                  stepIndex
                ) {
                  console.log(
                    "endung ",
                    elapsed
                  );
                  timeoutRef.current =
                    setTimeout(() => {
                      handleStop();
                    }, elapsed * 1000);
                  return;
                }
              }
              if (isNumber(step)) {
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
                  loopElapsed +
                  currElapsed;

                const start =
                  context.currentTime +
                  elapsed;
                lookup[sourceKey].play(
                  start,
                  step,
                  {
                    volume:
                      (stepIndex % 4 ===
                      0
                        ? 1.4
                        : stepIndex %
                            2 ===
                          0
                        ? 1.2
                        : 1) * 0.22,
                    duration: sps,
                    ...options,
                  }
                );
              }
            }
          );
        });
      }
    );
  };

  return {
    play,
    stop: handleStop,
    isPlaying: isPlaying,
  };
};
