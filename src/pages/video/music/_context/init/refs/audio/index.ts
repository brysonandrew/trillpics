import { useMemo } from "react";
import { useMusicInitRefsDelays } from "~/pages/video/music/_context/init/refs/audio/delays";
import { useMusicInitRefsDrums } from "~/pages/video/music/_context/init/refs/audio/drums";
import { useMusicInitRefsFilters } from "~/pages/video/music/_context/init/refs/audio/filters";
import { useMusicInitRefsGains } from "~/pages/video/music/_context/init/refs/audio/gains";
import { useSynthOscillators } from "~/pages/video/music/_context/init/refs/audio/oscillators";
import { useMusicInitRefsSave } from "~/pages/video/music/_context/init/refs/audio/save";

export const useRefsAudio = () => {
  const oscillators =
    useSynthOscillators();
  const drums = useMusicInitRefsDrums();
  const save = useMusicInitRefsSave();
  const _gains =
    useMusicInitRefsGains();
  const filters =
    useMusicInitRefsFilters();
  const delays =
    useMusicInitRefsDelays();

  const audio = useMemo(() => {
    const init = (
      context: AudioContext
    ) => {
      const gains = _gains(context);
      const destination =
        new MediaStreamAudioDestinationNode(
          context
        );

      gains.midisMaster.connect(
        gains.master
      );
      gains.beatsMaster.connect(
        gains.master
      );
      gains.master.connect(destination);
      gains.master.connect(
        context.destination
      );

      return {
        oscillator:
          oscillators(context),
        drums: drums(),
        save: save(
          context,
          destination
        ),
        gains,
        filters: filters(context),
        delays: delays(context),
        destination,
      };
    };
    return init;
  }, []);

  const ref = useMemo(() => {
    const context = new AudioContext();
    return {
      context,
      ...audio(context),
    };
  }, []);

  return ref;
};
