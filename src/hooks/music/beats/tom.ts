import { TBeatsSequenceKey, TPlayBeatsOptions } from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { resolveAudioSampleSrc } from "~/utils/src";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";
const key: TBeatsSequenceKey = "tom";

export const useTom = () => {
  const { context, master , bufferSourceRecord,bufferRecord} =
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
    bufferRecord[key] ??  await handleSample(
        resolveAudioSampleSrc(key, 0)
      );

    const source =
      context.createBufferSource();
    source.buffer = sampleBuffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start(startTime);

    bufferSourceRecord[key] = source
  };


  const stop = () => {
    if (bufferSourceRecord[key]) {
      bufferSourceRecord[key].stop();
    }
  };

  return { play, stop };
};
