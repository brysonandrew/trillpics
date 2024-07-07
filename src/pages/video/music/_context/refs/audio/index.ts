import { useMemo } from "react";
import { useMusicRefsDelays } from "~/pages/video/music/_context/refs/audio/delays";
import { useMusicRefsDrums } from "~/pages/video/music/_context/refs/audio/drums";
import { useMusicRefsBiquads } from "~/pages/video/music/_context/refs/audio/biquads";
import { useMusicRefsGains } from "~/pages/video/music/_context/refs/audio/gains";
import { AUDIO_GRAPH } from "~/pages/video/music/_context/refs/audio/graph/constants";
import { useSynthKarpluses } from "~/pages/video/music/_context/refs/audio/karpluses";
import { useSynthModulators } from "~/pages/video/music/_context/refs/audio/modulators";
import { useSynthNoises } from "~/pages/video/music/_context/refs/audio/noises";
import { useSynthOscillators } from "~/pages/video/music/_context/refs/audio/oscillators";
import { useMusicRefsSave } from "~/pages/video/music/_context/refs/audio/save";
import { TScheduleOptions } from "~/pages/video/music/_context/refs/schedule/types";
import { TLoadWorklets } from "~/pages/video/music/_context/load/worklets/types";
import { useSynthBitcrushers } from "~/pages/video/music/_context/refs/audio/bitcrusher";
import { LOAD_WORKLETS } from "~/pages/video/music/_context/load/worklets/worklets";
import { useSynthRingMods } from "~/pages/video/music/_context/refs/audio/ring-mod";

export const useRefsAudio = (
  options: TScheduleOptions
) => {
  const _oscillators =
    useSynthOscillators();
  const _ringMods = useSynthRingMods();
  const _noises = useSynthNoises();
  const _karpluses =
    useSynthKarpluses();
  const drums = useMusicRefsDrums();
  const save = useMusicRefsSave();
  const _gains =
    useMusicRefsGains();
  const _modulators =
    useSynthModulators(options);
  const _biquads =
    useMusicRefsBiquads();
  const _delays =
    useMusicRefsDelays();
  const _bitcrushers =
    useSynthBitcrushers();

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
      const noises = _noises(context);
      const karpluses = _karpluses(
        context,
        noises
      );
      const oscillators =
        _oscillators(context);

      const ringMods = _ringMods(context)

      const modulators = _modulators(
        oscillators.create,
        oscillators.recycle,
        gains.create,
        gains.recycle
      );
      const biquads = _biquads(context);
      const delays = _delays(context);

      const graph = AUDIO_GRAPH;
      const worklets: TLoadWorklets =
        LOAD_WORKLETS;

      const bitcrushers =
        _bitcrushers(context);

      return {
        oscillators,
        ringMods,
        noises,
        worklets,
        karpluses,
        bitcrushers,
        modulators,
        drums: drums(),
        save: save(
          context,
          destination
        ),
        gains,
        biquads,
        delays,
        destination,
        graph,
      } as const;
    };
    return init;
  }, []);

  const refs = useMemo(() => {
    const context = new AudioContext();
    return {
      context,
      ...audio(context),
    };
  }, []);

  return refs;
};
