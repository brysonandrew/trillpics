import { useMemo } from "react";

export const useMusicInitRefsGains =
  () => {
    const gains = useMemo(() => {
      const init = (
        context: AudioContext
      ) => {
        const master =
          context.createGain();
        master.gain.value = 0.5;

        const midis =
          context.createGain();
        midis.gain.value = 0.5;

        const beats =
          context.createGain();
        beats.gain.value = 0.5;
        return {
          beats,
          master,
          midis,
        };
      };

      return init;
    }, []);

    return gains;
  };
