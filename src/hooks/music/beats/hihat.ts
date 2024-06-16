import {
  TBeatsSequenceKey,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { resolveAudioSampleSrc } from "~/utils/src";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";
const key: TBeatsSequenceKey = "hihat";
export const useHihat = () => {
  const {
    context,
    master,
    bufferSourceRecord,
    bufferRecord,
  } = useMusicInitContext();
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
        type: "highpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.1 * volume,
    });

    const sampleBuffer: AudioBuffer =
      bufferRecord[key] ??
      (await handleSample(
        resolveAudioSampleSrc(
          key,
          version
        )
      ));
    const source =
      context.createBufferSource();
    source.buffer = sampleBuffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start(startTime);

    bufferSourceRecord[key] = source;
  };

  const stop = () => {
    if (bufferSourceRecord[key]) {
      bufferSourceRecord[key].stop();
    }
  };

  return { play, stop };
};
