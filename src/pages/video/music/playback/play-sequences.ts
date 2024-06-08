import { useMusicPlaybackLookup } from "~/pages/video/music/playback/lookup";
import { useSoundContext } from "~/shell/global/sound";
import { useTrillPicsStore } from "~/store/middleware";
const BEATS_PER_M = 120;
const BEATS_PER_S = 60 / BEATS_PER_M;

export const usePlaySequences = () => {
  const lookup =
    useMusicPlaybackLookup();
  const { context } = useSoundContext();
  const { sequences } =
    useTrillPicsStore(
      ({ sequences }) => ({
        sequences,
      })
    );

  const handler = async () => {
    await context.resume();
    sequences.forEach((sequence) => {
      const { source, beats } =
        sequence;
      beats.forEach(
        (beat, beatIndex) => {
          if (beat) {
            const elapsed =
              beatIndex * BEATS_PER_S;
            lookup[source](
              context.currentTime +
                elapsed,
                beat
            );
          }
        }
      );
    });
  };

  return handler;
};
