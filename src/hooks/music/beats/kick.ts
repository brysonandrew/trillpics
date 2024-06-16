import { useEffect } from "react";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import {
  TBeatsStepsKey,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { resolveAudioSampleSrc } from "~/utils/src";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";
const key: TBeatsStepsKey = "kick";

export const useKick = () => {
  const { endTimeout, timeoutRef } =
    useTimeoutRef();
  const {
    context,
    master,
    bufferSourceRecord,
    bufferRecord,
  } = useMusicInitContext();
  const handleSample =
    useBufferFromSrcHandler(context);
  const stop = () => {
    if (bufferSourceRecord[key]) {
      bufferSourceRecord[key].stop();
    }
  };
  const play = async (
    startTime: number,
    options: TPlayBeatsOptions = {}
  ) => {
    const { version = 0, volume = 1 } =
      options;

    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 400,
        type: "lowpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.2 * volume,
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
    timeoutRef.current = setTimeout(
      () => {
        stop();
      },
      sampleBuffer.duration*1000
    );
  };

  useEffect(() => {
    return () => {
      endTimeout();
    };
  }, []);

  return { play, stop };
};
