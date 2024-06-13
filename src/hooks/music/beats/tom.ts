import { TPlayBeatsOptions } from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { resolveAudioSampleSrc } from "~/utils/src";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";

export const useTom = () => {
  const { context, master , bufferSourceRecord} =
    useMusicInitContext();
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

    bufferSourceRecord.tom = source
  };


  const stop = () => {
    if (bufferSourceRecord.hihat) {
      bufferSourceRecord.hihat.stop();
    }
  };

  return { play, stop };
};
