import { TBeatsKey } from "~/hooks/music/beats/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { isDefined } from "~/utils/validation/is/defined";

export const useSourceBufferStop = (
  key: TBeatsKey
) => {
  const { bufferSourceRecord } =
    useContextMusicInit();
  const handler = (
    stepIndex?: number
  ) => {
    if (isDefined(stepIndex)) {
      if (
        bufferSourceRecord[key][
          stepIndex
        ]
      ) {
        if (
          bufferSourceRecord[key][
            stepIndex
          ].source
        ) {
          bufferSourceRecord[key][
            stepIndex
          ].source.stop();
        }
        if (
          bufferSourceRecord[key][
            stepIndex
          ].timeout
        ) {
          clearTimeout(
            bufferSourceRecord[key][
              stepIndex
            ].timeout
          );
        }
      }
    } else {
      bufferSourceRecord[key].forEach(
        (_, index) => {
          handler(index);
        }
      );
    }
  };
  return handler;
};
