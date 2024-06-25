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

        const midisMaster =
          context.createGain();
        midisMaster.gain.value = 0.5;

        const beatsMaster =
          context.createGain();
        beatsMaster.gain.value = 0.5;
        return {
          beatsMaster,
          master,
          midisMaster,
        };
      };

      return init;
    }, []);

    return gains;
  };
