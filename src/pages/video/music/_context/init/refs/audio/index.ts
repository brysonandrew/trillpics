import { useMemo } from "react";
import { WORKLETS } from "~/constants/music/worklets";
import { useMusicInitRefsDelays } from "~/pages/video/music/_context/init/refs/audio/delays";
import { useMusicInitRefsDrums } from "~/pages/video/music/_context/init/refs/audio/drums";
import { useMusicInitRefsFilters } from "~/pages/video/music/_context/init/refs/audio/filters";
import { useMusicInitRefsGains } from "~/pages/video/music/_context/init/refs/audio/gains";
import { useSynthModulators } from "~/pages/video/music/_context/init/refs/audio/modulators";
import { useSynthOscillators } from "~/pages/video/music/_context/init/refs/audio/oscillators";
import { useMusicInitRefsSave } from "~/pages/video/music/_context/init/refs/audio/save";
import { TScheduleOptions } from "~/pages/video/music/_context/init/refs/schedule/types";
import { TWorkletKey } from "~/types/worklets";

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

      gains.midis.master.connect(gains.master);
      gains.beats.master.connect(gains.master);
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

      const worklets = WORKLETS.reduce((a,key:TWorkletKey) => ({
        [key]:null,
        ...a,
      }), {} as Record<TWorkletKey,AudioWorkletNode|null>)

      return {
        oscillator,
        modulator,
        worklets,
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
