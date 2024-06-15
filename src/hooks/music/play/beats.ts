import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";

export const usePlayBeats = () => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const { context,audio } =
    useMusicInitContext();
  const { beats: lookup } =
    useMusicReadyContext();
  const {
    playKey,
    bpm,
    beatsPresetKey,
    set,
  } = useTrillPicsStore(
    ({
      playKey,
      bpm,
      beatsPresetKey,
      set,
    }) => ({
      playKey,
      bpm,
      beatsPresetKey,
      set,
    })
  );
  const {
    loopCount,

  } = useMusicRecorderContext();

  const isPlaying = playKey === "beats";

  const handleStopAll = () => {
    console.log(loopCount,'handleStopAll');

    BEATS_KEYS.forEach((beatKey) => {
      lookup[beatKey].stop();
    });
    set({ playKey: null });
  };

  const play = async () => {
    if (isPlaying) {
      handleStopAll();
    }
    set({
      playKey: "beats",
    });
    await context.resume();
    let elapsed = 0;
    console.log(audio.loopCount,'loopCount');

    [...Array(audio.loopCount)].forEach(
      (_, loopIndex) => {

        BEATS_KEYS.forEach(
          (beatKey) => {
            const presets =
              BEATS_PRESETS[
                beatsPresetKey
              ];
            const steps =
              presets[beatKey] ?? [];
            console.log(steps);
            steps.forEach(
              (
                step,
                stepIndex,
                { length: stepCount }
              ) => {
                if (step) {
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
                  console.log(loopElapsed,'loopElapsed')
                  elapsed =
                    currElapsed +
                    loopElapsed;
                  lookup[beatKey].play(
                    context.currentTime +
                      elapsed,
                    {
                      volume:
                        stepIndex %
                          4 ===
                        0
                          ? 1.4
                          : stepIndex %
                              2 ===
                            0
                          ? 1.2
                          : 1,
                    }
                  );
                }
              }
            );
          }
        );
      }
    );
    console.log(elapsed);
    // endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        handleStopAll();
        // lookup[beatKey].stop();
      },
      elapsed * 1000
    );
  };

  return {
    play,
    stop: handleStopAll,
    isPlaying,
  };
};
