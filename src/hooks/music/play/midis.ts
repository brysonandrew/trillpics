import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";
import { MIDIS } from "~/hooks/music/midis/constants";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { MIDIS_1_R } from "~/constants/music/midis";
import { SCALE_RECORD } from "~/constants/scales";
import { isNumber } from "~/utils/validation/is/number";

export const usePlayMidis = () => {
  const { midis: lookup } =
    useMusicReadyContext();
  const { context } =
    useMusicInitContext();
  const {
    bpm,
    options,
    multi,
    playKey,
    scaleKey,
    synthSteps,
    set,
  } = useTrillPicsStore(
    ({
      bpm,
      scaleKey,
      options,
      multi,
      playKey,
      synthSteps,
      set,
    }) => ({
      bpm,
      scaleKey,
      options,
      multi,
      playKey,
      synthSteps,
      set,
    })
  );

  const play = async () => {
    await context.resume();
    set({
      playKey: "midis",
    });
    MIDIS.forEach((midiKey) => {
      if (!lookup[midiKey]) return;

      [...synthSteps].forEach(
        (midi, index) => {
          if (isNumber(midi)) {
            const sps =
              resolveStepsPerSecond(
                bpm
              );
            const elapsed = index * sps;
            const start =
              context.currentTime +
              elapsed;
            lookup[midiKey].play(
              start,
              midi,
              {
                volume:
                  (index % 4 === 0
                    ? 1.4
                    : index % 2 === 0
                    ? 1.2
                    : 1) * 0.22,
                duration: sps,
                ...options,
                ...multi,
              }
            );
          }
        }
      );
    });
  };

  const handleStop = () => {
    set({ playKey: null });
    lookup.synth.stop();
  };

  return {
    play,
    stop: handleStop,
    isPlaying: playKey === "midis",
  };
};
