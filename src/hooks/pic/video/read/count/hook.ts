import { useSearchParams } from "react-router-dom";
import { SELECTED_PARAM_KEY } from "~/hooks/pic/constants";
import { picVideoReadCount } from "~/hooks/pic/video/read/count";

export const usePicVideoReadCount =
  () => {
    const [searchParams] =
      useSearchParams();
    const paramValues =
      searchParams.getAll(
        SELECTED_PARAM_KEY
      );
    return picVideoReadCount(
      paramValues
    );
  };