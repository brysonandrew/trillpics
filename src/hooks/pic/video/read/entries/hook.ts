import { useSearchParams } from "react-router-dom";
import {
  REMOVING_PARAM_KEY,
  SELECTED_PARAM_KEY,
} from "~/hooks/pic/constants";
import { videoReadEntries } from "~/hooks/pic/video/read/entries";

export const useVideoReadEntries =
  () => {
    const [searchParams] =
      useSearchParams();
    const paramValues =
      searchParams.getAll(
        SELECTED_PARAM_KEY
      );
    const removingParamValues =
      searchParams.getAll(
        REMOVING_PARAM_KEY
      );
    return videoReadEntries(
      paramValues,
      removingParamValues
    );
  };
