import { BEATS_PER_S } from "~/constants/music";
import { BEATS } from "~/hooks/sound/beats/constants";
import { useSoundBeatsLookup } from "~/hooks/sound/beats/lookup";
import { useSoundContext } from "~/shell/global/sound";
import { useTrillPicsStore } from "~/store/middleware";

export const usePlayBeats = () => {
  const lookup = useSoundBeatsLookup();
  const { context } = useSoundContext();
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
            const elapsed =
              beatIndex * BEATS_PER_S;
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
