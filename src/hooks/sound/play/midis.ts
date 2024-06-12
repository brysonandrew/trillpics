import { useMusicContext } from "~/pages/video/music/context/index";
import { MIDIS } from "~/hooks/sound/midis/constants";
import { useSoundContext } from "~/shell/global/sound";
import { useTrillPicsStore } from "~/store/middleware";

export const usePlayMidis = () => {
  const {
    options,
    multi,
    playKey,
    midis: lookup,
    dispatch,
  } = useMusicContext();
  const { context, bpm } =
    useSoundContext();
  const { music } = useTrillPicsStore(
    ({ music }) => ({
      music,
    })
  );
  console.log(options, multi);
  const play = async () => {
    await context.resume();
    dispatch({
      type: "playing",
      value: 'midis',
    });
    MIDIS.forEach((midiKey) => {
      if (
        !lookup[midiKey] ||
        !music[midiKey]
      )
        return;

      const synth = music[midiKey];
      const steps = synth.steps ?? [];

      [...steps, ...steps].forEach(
        (midi, index) => {
          if (midi) {
            const duration =
              1 / (4 * (bpm / 60));
            const elapsed =
              index * duration;
            lookup[midiKey].play(
              context.currentTime +
                elapsed,
              midi + 60,
              {
                volume:
                  (index % 4 === 0
                    ? 1.4
                    : index % 2 === 0
                    ? 1.2
                    : 1) * 0.22,
                duration,
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
    dispatch({
      type: "playing",
      value: 'midis',
    });
    lookup.synth.stop();
  };

  return {
    play,
    stop: handleStop,
    isPlaying:playKey === 'midis',
  };
};
