import { TPlayBeatsOptions } from "~/hooks/sound/beats/types";
import { useSoundContext } from "~/shell/global/sound";
import { resolveAudioSampleSrc } from "~/utils/src";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";

export const useTom = () => {
  const { context, master } =
    useSoundContext();
  const handleSample =
    useBufferFromSrcHandler(context);

  const play = async (
    startTime: number,
    options: TPlayBeatsOptions = {}
  ) => {
    const { version = 2, volume = 1 } =
      options;

    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "lowpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.4 * volume,
    });

    const sampleBuffer: AudioBuffer =
      await handleSample(
        resolveAudioSampleSrc("tom", 0)
      );

    const source =
      context.createBufferSource();
    source.buffer = sampleBuffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start(startTime);
  };

  return play;
};
