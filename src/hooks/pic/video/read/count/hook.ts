import { useSearchParams } from "react-router-dom";
import { VIDEO_PARAM_KEY } from "~/hooks/pic/constants";
import { picVideoReadCount } from "~/hooks/pic/video/read/count";

export const usePicVideoReadCount =
  () => {
    const [searchParams] =
      useSearchParams();
    const paramValues =
      searchParams.getAll(
        VIDEO_PARAM_KEY
      );
    return picVideoReadCount(
      paramValues
    );
  };
