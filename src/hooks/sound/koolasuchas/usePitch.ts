import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useSoundContext } from "~/shell/global/sound";

export const usePitch = () => {
  const { context, master } =
    useSoundContext();
  const { play, stop } =
    useSynthMulti(context);

  const handler = (
    startTime: number
  ) => {
    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 5000,
        type: "highpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.2,
    });
    const opts: TMultiOptions = {
      type: "sine",
      midi: 70,
      count: 1,
      spread: 1,
      stagger: 0,
      decay: 0,
      start: startTime,
      end: startTime + 0.4,
      output: filter,
    };

    filter.frequency.linearRampToValueAtTime(
      10,
      startTime + 0.6
    );
    gain.gain.linearRampToValueAtTime(
      0,
      startTime + 0.6
    );

    filter.connect(gain);
    gain.connect(master);

    play(opts);
  };

  return { play: handler, stop };
};
