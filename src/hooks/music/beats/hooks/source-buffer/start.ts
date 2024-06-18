import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { key } from "localforage";
import { TBeatsKey } from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
type THandlerConfig = {
  stepIndex: number;
  startTime: number;
  output: AudioNode;
};
export const useSourceBufferStart = (
  key: TBeatsKey
) => {
  const {
    drumsMaster,
    context,
    bufferSourceRecord,
    bufferRecord,
  } = useMusicInitContext();
  const { set, drums } =
    useTrillPicsStore(
      ({ set, drums }) => ({
        set,
        drums,
      })
    );

  const handler = (
    config: THandlerConfig
  ) => {
    const {
      startTime,
      stepIndex,
      output,
    } = config;
    const sampleBuffer =
      bufferRecord[key];

    if (!sampleBuffer) {
      console.log("NO SAM");
      return;
    }

    if (!bufferSourceRecord[key]) {
      bufferSourceRecord[key] = [];
    }

    const source =
      context.createBufferSource();
    const stopTime =
      (sampleBuffer.duration +
        startTime) *
      1000;
    const timeout = setTimeout(() => {
      source.stop();
    }, stopTime);
    bufferSourceRecord[key][stepIndex] =
      {
        source,
        timeout,
      };
    bufferSourceRecord[key][
      stepIndex
    ].source.buffer = sampleBuffer;
    bufferSourceRecord[key][
      stepIndex
    ].source.connect(drumsMaster);
    drumsMaster.gain.value = drums.gain;
    drumsMaster.connect(context.destination);

    bufferSourceRecord[key][
      stepIndex
    ].source.start(startTime);
  };
  return handler;
};
