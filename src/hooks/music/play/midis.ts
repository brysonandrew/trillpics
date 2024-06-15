import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";
import { MIDIS } from "~/hooks/music/midis/constants";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { isNumber } from "~/utils/validation/is/number";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { TPlayingKey } from "~/store/state/music/types";
import { TState } from "~/store/types";
import { lookup } from "dns";
import { steps } from "framer-motion";

export const usePlayMidis = () => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const { midis: lookup } =
    useMusicReadyContext();
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
  const {
    loopCount,
    videoSeconds,
    loopsRemainder,
    isRecording
  } = useMusicRecorderContext();

  const isPlaying =
    playingKeys.includes("midis");

  const handleStop = () => {
    set((prev: TState) => ({
      playingKeys:
        prev.playingKeys.filter(
          (v: TPlayingKey) =>
            v !== "midis"
        ),
    }));
    lookup.synth.stop();
  };

  const play = async () => {
    const {
      steps,
      melody,
      ...options
    } = synth;
    await context.resume();
    set((prev: TState) => ({
      playingKeys: [
        ...prev.playingKeys,
        "midis",
      ],
    }));
    let elapsed = 0;
    const sps = resolveStepsPerSecond(
      bpm,
      steps.length
    );
    const remainderSteps = Math.floor(
      audio.loopsRemainder / sps
    );
console.log(recorder.state,isRecording);
    [
      ...Array(recorder.state === "recording" ?  audio.loopCount + 1 : 1),
    ].forEach(
      (
        _,
        loopIndex,
        { length: loopCount }
      ) => {
        MIDIS.forEach((midiKey) => {
          if (!lookup[midiKey]) return;
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
                lookup[midiKey].play(
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
