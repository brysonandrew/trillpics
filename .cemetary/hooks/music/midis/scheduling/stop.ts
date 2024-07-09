import { TBeatsKey } from "~/hooks/music/beats/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { isDefined } from "~/utils/validation/is/defined";

export const useSourceBufferStop = (
  key: TBeatsKey
) => {
  const {
    audio: { drums },
  } = useMusicRefs();
  const handler = (
    stepIndex?: number
  ) => {
    if (isDefined(stepIndex)) {
      if (
        drums.bufferSourceRecord[key][
          stepIndex
        ]
      ) {
        if (
          drums.bufferSourceRecord[key][
            stepIndex
          ].source
        ) {
          drums.bufferSourceRecord[key][
            stepIndex
          ].source.stop();
        }
        if (
          drums.bufferSourceRecord[key][
            stepIndex
          ].timeout
        ) {
          clearTimeout(
            drums.bufferSourceRecord[
              key
            ][stepIndex].timeout
          );
        }
      }
    } else {
      drums.bufferSourceRecord[
        key
      ].forEach((_, index) => {
        handler(index);
      });
    }
  };
  return handler;
};
