import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useSoundContext } from "~/context/sound";

export const useDrone = () => {
  const { context, master } = useSoundContext();
  const { play, stop } = useSynthMulti(context);

  const handler = () => {
    const delay = new DelayNode(context, {
      delayTime: 0.99,
    });
    const lfo = new OscillatorNode(context, {
      frequency: 0.5,
    });
    const lfoGain = new GainNode(context, { gain: 500 });
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "lowpass",
    });
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const gain = new GainNode(context, { gain: 0.06 });
    const opts: TMultiOptions = {
      type: "sawtooth",
      midi: 28,
      count: 20,
      spread: 0.4,
      stagger: 0.1,
      start: context.currentTime,
      output: delay,
    };

    delay.delayTime.exponentialRampToValueAtTime(0.001, 1);

    delay.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    play(opts);
  };

  return { play: handler, stop };
};
