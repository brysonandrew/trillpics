import { useSynthwaveContext } from "@state/Context";
import { BEATS_PER_S } from "~/constants/music";
import { BEATS } from "~/hooks/sound/beats/constants";
import { useSoundContext } from "~/shell/global/sound";
import { useTrillPicsStore } from "~/store/middleware";

export const usePlayBeats = () => {
  const { context, bpm } =
    useSoundContext();
  const {
    lookup: { beats: lookup },
  } = useSynthwaveContext();
  const { music } = useTrillPicsStore(
    ({ music }) => ({
      music,
    })
  );

  const handler = async () => {
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
            lookup[beatKey](
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

  return handler;
};
