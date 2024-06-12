import { useMusicContext } from "~/pages/video/music/context/index";
import { BEATS } from "~/hooks/sound/beats/constants";
import { useSoundContext } from "~/shell/global/sound";
import { useTrillPicsStore } from "~/store/middleware";

export const usePlayBeats = () => {
  const { context, bpm } =
    useSoundContext();
  const {
    playKey,
    dispatch,
    beats:lookup
  } = useMusicContext();
  const { music } = useTrillPicsStore(
    ({ music }) => ({
      music,
    })
  );

  const play = async () => {
    dispatch({
      type: "playing",
      value: 'beats',
    });
    await context.resume();
    
    BEATS.forEach((beatKey) => {
      const steps =
        music[beatKey] ?? [];
      [...steps, ...steps].forEach(
        (beat, beatIndex) => {
          if (beat) {
            const duration =
              1 / (4 * (bpm / 60));
            const elapsed =
              beatIndex * duration;
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
    dispatch({
      type: "playing",
      value: null
    });
    BEATS.forEach((beatKey) => {
      lookup[beatKey].stop();
    })
  };
  return {
    play,
    stop: handleStop,
    isPlaying:playKey==='beats',
  };
};
