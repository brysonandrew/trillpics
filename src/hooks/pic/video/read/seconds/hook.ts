import { useSearchParams } from "react-router-dom";
import {
  SECONDS_PARAM_KEY,
  SELECTED_PARAM_KEY,
} from "~/hooks/pic/constants";
import { picVideoReadCount } from "~/hooks/pic/video/read/count";
import { resolveSecondsFromCount } from "~/hooks/pic/video/read/seconds/from-count";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const usePicVideoReadSeconds =
  () => {
    const {
      schedule: {
        record: { bpm },
      },
    } = useMusicRefs();
    const [searchParams] =
      useSearchParams();
    const seconds = Number(
      searchParams.get(
        SECONDS_PARAM_KEY
      )
    );

    const paramValues =
      searchParams.getAll(
        SELECTED_PARAM_KEY
      );
    const count = picVideoReadCount(
      paramValues
    );
    const result =
      seconds ||
      resolveSecondsFromCount(
        count,
        bpm
      );
    return result;
  };
