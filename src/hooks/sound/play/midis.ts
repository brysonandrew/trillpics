import { steps } from "framer-motion";
import { BEATS_PER_S } from "~/constants/music";
import { MIDIS } from "~/hooks/sound/midis/constants";
import { useSoundMidisLookup } from "~/hooks/sound/midis/lookup";
import { useSoundContext } from "~/shell/global/sound";
import { useTrillPicsStore } from "~/store/middleware";
import { SYNTH_TONE_LOOKUP } from "~/store/state/music/constants";

export const usePlayMidis = () => {
  const lookup = useSoundMidisLookup();
  const { context } = useSoundContext();
  const { music } = useTrillPicsStore(
    ({ music }) => ({
      music,
    })
  );

  const handler = async () => {
    await context.resume();
    console.log(music);
    MIDIS.forEach((midiKey) => {
      if (
        !lookup[midiKey] ||
        !music[midiKey]
      )
        return;

      const synth = music[midiKey]
      const steps =
        synth.steps ?? [];

      const type = SYNTH_TONE_LOOKUP[synth.config.tone];
      console.log(steps);
      [...steps, ...steps].forEach(
        (midi, index) => {
          if (midi) {
            const elapsed =
              index * BEATS_PER_S;
            lookup[midiKey](
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
                duration: BEATS_PER_S,
                type,
              }
            );
          }
        }
      );
    });
  };

  return handler;
};
