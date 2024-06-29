import { useMemo } from "react";
import { useMusicInitRefsDelays } from "~/pages/video/music/_context/init/refs/audio/delays";
import { useMusicInitRefsDrums } from "~/pages/video/music/_context/init/refs/audio/drums";
import { useMusicInitRefsFilters } from "~/pages/video/music/_context/init/refs/audio/filters";
import { useMusicInitRefsGains } from "~/pages/video/music/_context/init/refs/audio/gains";
import { useSynthModulators } from "~/pages/video/music/_context/init/refs/audio/modulators";
import { useSynthOscillators } from "~/pages/video/music/_context/init/refs/audio/oscillators";
import { useMusicInitRefsSave } from "~/pages/video/music/_context/init/refs/audio/save";
import { TScheduleOptions } from "~/pages/video/music/_context/init/refs/schedule/types";

export const useRefsAudio = (options:TScheduleOptions) => {
  const oscillators =
    useSynthOscillators();
  const drums = useMusicInitRefsDrums();
  const save = useMusicInitRefsSave();
  const _gains =
    useMusicInitRefsGains();
  const _modulators =
    useSynthModulators(options);
  const filters =
    useMusicInitRefsFilters();
  const delays =
    useMusicInitRefsDelays();

  const audio = useMemo(() => {
    const init = (
      context: AudioContext
    ) => {
      const oscillator =
        oscillators(context);
      const gains = _gains(context);
      const destination =
        new MediaStreamAudioDestinationNode(
          context
        );

      gains.midis.connect(gains.master);
      gains.beats.connect(gains.master);
      gains.master.connect(destination);
      gains.master.connect(
        context.destination
      );

      const modulator = _modulators(
        oscillator.create,
        oscillator.recycle,
        gains.create,
        gains.recycle
      );

      return {
        oscillator,
        modulator,
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
