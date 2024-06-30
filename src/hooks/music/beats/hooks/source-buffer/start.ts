import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsKey,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
type THandlerConfig =
  TPlayBeatsOptions & {
    startTime: number;
    output: AudioNode;
  };
export const useSourceBufferStart = (
  key: TBeatsKey
) => {
  const {
    audio: { context, drums },
  } = useMusicRefs();

  const stop = useSourceBufferStop(key);

  const handler = (
    config: THandlerConfig
  ) => {
    const {
      startTime,
      stepIndex = 0,
      output,
    } = config;
    const sampleBuffer =
      drums.bufferRecord[key];
    if (!sampleBuffer) {
      console.log("NO sampleBuffer");
      return;
    }

    const stopTime =
      (sampleBuffer.duration +
        startTime) *
      1000;

    drums.bufferSourceRecord[key][
      stepIndex
    ] = {
      source:
        context.createBufferSource(),
      timeout: setTimeout(() => {
        stop(stepIndex);
      }, stopTime),
    };

    drums.bufferSourceRecord[key][
      stepIndex
    ].source.buffer = sampleBuffer;
    drums.bufferSourceRecord[key][
      stepIndex
    ].source.connect(output);
    drums.bufferSourceRecord[key][
      stepIndex
    ].source.start(startTime);

    drums.bufferSourceRecord[key][
      stepIndex
    ].source.playbackRate.value =
      drums.options.playbackRate ?? 1;
  };
  return handler;
};
