import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";
import { MIDIS } from "~/hooks/music/midis/constants";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { MIDIS_1_R } from "~/constants/music/midis";

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
    set,
  } = useTrillPicsStore(
    ({
      bpm,
      options,
      multi,
      playKey,
      set,
    }) => ({
      bpm,
      options,
      multi,
      playKey,
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

      const steps = MIDIS_1_R;

      [...steps].forEach(
        (midi, index) => {
          if (midi) {
            const sps =
              resolveStepsPerSecond(
                bpm
              );
            const elapsed = index * sps;
            lookup[midiKey].play(
              context.currentTime +
                elapsed,
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
