import { TPlayBeatsOptions } from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { resolveAudioSampleSrc } from "~/utils/src";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";

export const useSnare = () => {
  const { context, master, bufferSourceRecord } =
    useMusicInitContext();
  const handleSample =
    useBufferFromSrcHandler(context);

  const play = async (
    startTime: number,
    options: TPlayBeatsOptions = {}

    // {
    //   volume=1,
    //   version = 2,
    // }: {
    //   version: 0 | 1 | 2 | 4;
    //   volume: number;
    // }
  ) => {
    const { version = 2, volume = 1 } =
      options;

    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "highpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.1 * volume,
    });

    const sampleBuffer: AudioBuffer =
      await handleSample(
        resolveAudioSampleSrc(
          "snare",
          version
        )
      );

    const source =
      context.createBufferSource();
    source.buffer = sampleBuffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start(startTime);

    bufferSourceRecord.snare = source
  };


  const stop = () => {
    if (bufferSourceRecord.hihat) {
      bufferSourceRecord.hihat.stop();
    }
  };

  return { play, stop };
};
