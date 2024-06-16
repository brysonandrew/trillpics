import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const usePulse = () => {
  const { context, master } =
    useMusicInitContext();
  const { play, stop } =
    useSynthMulti(context);

  const handler = (
    startTime: number,
    midi: number
  ) => {
    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 1200,
        type: "lowpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.05,
    });
    const options: TMultiOptions = {
      type: "square",
      midi: midi ?? 16,
      count: 1,
      spread: 0.1,
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
      0.1,
      startTime + 0.6
    );

    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
