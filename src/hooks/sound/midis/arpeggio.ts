import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { TPlayMidisOptions } from "~/hooks/sound/midis/types";
import { useSoundContext } from "~/shell/global/sound";

export const useArpeggio = () => {
  const { context, master } =
    useSoundContext();
  const multiSynth =
    useSynthMulti(context);

  const handler = (
    startTime: number,
    midi: number,
    options: TPlayMidisOptions = {}
  ) => {
    const {
      duration,
      volume = 1,
      type = "sawtooth",
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
    const multiSynthOptions: TMultiOptions =
      {
        type,
        midi: midi ?? 0,
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

  const handle8ths = (
    startTime: number,
    midi: number,
    options: TPlayMidisOptions = {}
  ) => {
    const { duration } = options;
    const durationHalf =
      (duration ?? -0) / 2;
    handler(startTime, midi, {
      duration: durationHalf,
    });
    handler(
      startTime + durationHalf,
      midi,
      { duration: durationHalf }
    );
  };

  const handleStop = () => {
    stop.bind(multiSynth.stop)
  }

  return {
    play: handler,
    stop: handleStop,
  };
};
