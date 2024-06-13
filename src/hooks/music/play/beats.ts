import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";

export const usePlayBeats = () => {
  const { context } =
    useMusicInitContext();
  const { beats: lookup } =
    useMusicReadyContext();
  const { playKey, bpm, beatsPresetKey, set } =
    useTrillPicsStore(
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

  const play = async () => {
    set({
      playKey: "beats",
    });
    await context.resume();

    BEATS_KEYS.forEach((beatKey) => {
      const presets = BEATS_PRESETS[beatsPresetKey]
      const steps =
      presets[beatKey] ?? [];
      [...steps].forEach(
        (beat, beatIndex) => {
          if (beat) {
            const sps =
              resolveStepsPerSecond(
                bpm
              );
            const elapsed =
              beatIndex * sps;
            lookup[beatKey].play(
              context.currentTime +
                elapsed,
              {
                volume:
                  beatIndex % 4 === 0
                    ? 1.4
                    : beatIndex % 2 ===
                      0
                    ? 1.2
                    : 1,
              }
            );
          }
        }
      );
    });
  };
  const handleStop = () => {
    BEATS_KEYS.forEach((beatKey) => {
      lookup[beatKey].stop();
    });
    set({ playKey: null });
  };
  return {
    play,
    stop: handleStop,
    isPlaying: playKey === "beats",
  };
};
