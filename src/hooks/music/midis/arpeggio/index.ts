import { useMemo } from "react";
import { useSynthMulti } from "react-synthwave";
import { useGainNode } from "~/hooks/music/midis/gains/hook";
import { TPlayMidisOptions } from "~/hooks/music/midis/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const useArpeggio = () => {
  const {
    context,
    midisMaster,
    audio,
  } = useMusicInitContext();

  const delayTime = 0.99; // 0.000001; //0.1;
  const Q = 1;

  const gainNode1 = useGainNode({
    context,
  });

  const filter = useMemo(() => {
    const result = new BiquadFilterNode(
      context,
      {
        frequency: 400,
        type: "lowpass",
        detune: 0,
        Q,
      }
    );
    return result;
  }, []);

  const sm = useSynthMulti(context, {
    type: "sawtooth",
    gain: 1,
    output: audio.delay,
  });

  const handleStop = () => {
    sm.stop();
  };

  const handler = (
    startTime: number,
    stepMidi: number,
    options: TPlayMidisOptions = {}
  ) => {
    const { duration = 1 } = options;
    const baseMidi = stepMidi;

    const midi =
      (baseMidi ?? 0) +
        (stepMidi ?? 0) ?? 0;

    const endTime =
      startTime + duration * 4;

    sm.play({ midi, ...options });
    gainNode1.gain.value =
      (options.volume ?? 1) * 0.001;

    filter.connect(gainNode1);
    gainNode1.connect(midisMaster);

    audio.delay.delayTime.setValueAtTime(
      0.001,
      startTime
    );
    audio.delay.delayTime.linearRampToValueAtTime(
      0.99,

      endTime
    );
    audio.delay.connect(gainNode1);
  };
  return {
    play: handler,
    stop: handleStop,
  };
};
