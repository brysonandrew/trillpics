import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsKey,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { isNumber } from "~/utils/validation/is/number";
type THandlerConfig =
  TPlayBeatsOptions & {
    startTime: number;
    output: AudioNode;
  };
export const useSourceBufferStart = (
  key: TBeatsKey
) => {
  const {
    master,
    beatsMaster,
    context,
    bufferSourceRecord,
    bufferRecord,
  } = useMusicInitContext();

  const { bpm, beats } =
    useTrillPicsStore(
      ({ bpm, beats }) => ({
        bpm,
        beats,
      })
    );

  const stop = useSourceBufferStop(key);

  const handler = (
    config: THandlerConfig
  ) => {
    const {
      startTime,
      stepIndex = 0,
      output,
      rate,
      volume = 1,
    } = config;
    const sampleBuffer =
      bufferRecord[key];
    if (!sampleBuffer) {
      console.log("NO sampleBuffer");
      return;
    }

    const stopTime =
      (sampleBuffer.duration +
        startTime) *
      1000;

    bufferSourceRecord[key][stepIndex] =
      {
        source:
          context.createBufferSource(),
        timeout: setTimeout(() => {
          stop(stepIndex);
        }, stopTime),
      };

    bufferSourceRecord[key][
      stepIndex
    ].source.buffer = sampleBuffer;
    bufferSourceRecord[key][
      stepIndex
    ].source.connect(output);
    bufferSourceRecord[key][
      stepIndex
    ].source.start(startTime);

    if (isNumber(rate)) {
      bufferSourceRecord[key][
        stepIndex
      ].source.playbackRate.value =
        rate;
    }
  };
  return handler;
};
