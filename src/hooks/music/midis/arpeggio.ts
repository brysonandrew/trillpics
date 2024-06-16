import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { TPlayMidisOptions } from "~/hooks/music/midis/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const useArpeggio = () => {
  const { context, master } =
    useMusicInitContext();
  const multiSynth =
    useSynthMulti(context);

  const handler = (
    startTime: number,
    stepMidi: number,
    options: TPlayMidisOptions = {}
  ) => {
    const {
      duration,
      volume = 1,
      type = "sawtooth",
      midi: baseMidi,
      ...synthwaveOptions
    } = options;
    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 700,
        type: "lowpass",
      }
    );
    const gain = new GainNode(context, {
      gain: volume * 0.1,
    });
    const midi =
      (baseMidi ?? 0) + stepMidi ?? 0;
    const multiSynthOptions: TMultiOptions =
      {
        type,
        midi,
        count: 4,
        start: startTime,
        end:
          startTime + (duration ?? 0.4),
        output: filter,
        ...synthwaveOptions,
      };

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(multiSynthOptions);
  };

  const handleStop = () => {
    stop.bind(multiSynth.stop);
  };

  return {
    play: handler,
    stop: handleStop,
  };
};
