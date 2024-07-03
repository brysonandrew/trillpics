import { useMemo } from "react";
import { WORKLETS } from "~/constants/music/worklets";
import { useMusicInitRefsDelays } from "~/pages/video/music/_context/init/refs/audio/delays";
import { useMusicInitRefsDrums } from "~/pages/video/music/_context/init/refs/audio/drums";
import { useMusicInitRefsFilters } from "~/pages/video/music/_context/init/refs/audio/filters";
import { useMusicInitRefsGains } from "~/pages/video/music/_context/init/refs/audio/gains";
import { AUDIO_GRAPH } from "~/pages/video/music/_context/init/refs/audio/graph/constants";
import { useSynthKarpluses } from "~/pages/video/music/_context/init/refs/audio/karpluses";
import { useSynthModulators } from "~/pages/video/music/_context/init/refs/audio/modulators";
import { useSynthOscillators } from "~/pages/video/music/_context/init/refs/audio/oscillators";
import { useMusicInitRefsSave } from "~/pages/video/music/_context/init/refs/audio/save";
import { TScheduleOptions } from "~/pages/video/music/_context/init/refs/schedule/types";
import { TWorkletKey } from "~/types/worklets";

export const useRefsAudio = (
  options: TScheduleOptions
) => {
  const _oscillators =
    useSynthOscillators();
  const _karpluses =
    useSynthKarpluses();
  const drums = useMusicInitRefsDrums();
  const save = useMusicInitRefsSave();
  const _gains =
    useMusicInitRefsGains();
  const _modulators =
    useSynthModulators(options);
  const _filters =
    useMusicInitRefsFilters();
  const _delays =
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

      gains.midis.master.connect(
        gains.master
      );
      gains.beats.master.connect(
        gains.master
      );
      gains.master.connect(destination);
      gains.master.connect(
        context.destination
      );

      const karpluses =
        _karpluses(context);
      const oscillators =
        _oscillators(context);

      const modulator = _modulators(
        oscillators.create,
        oscillators.recycle,
        gains.create,
        gains.recycle
      );
      const filters = _filters(context);
      const delays = _delays(context);
      const worklets = WORKLETS.reduce(
        (a, key: TWorkletKey) => ({
          [key]: null,
          ...a,
        }),
        {} as Record<
          TWorkletKey,
          AudioWorkletNode | null
        >
      );

      const graph = AUDIO_GRAPH;

      return {
        oscillators,
        karpluses,
        modulator,
        worklets,
        drums: drums(),
        save: save(
          context,
          destination
        ),
        gains,
        filters,
        delays,
        destination,
        graph,
      } as const;
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
