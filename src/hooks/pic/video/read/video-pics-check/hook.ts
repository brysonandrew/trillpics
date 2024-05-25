import { useSearchParams } from "react-router-dom";
import { SELECTED_PARAM_KEY } from "~/hooks/pic/constants";
import { videoPicsCheck } from "~/hooks/pic/video/read/video-pics-check";

export const useVideoPicsCheck = (key = SELECTED_PARAM_KEY) => {
  const [searchParams] =
    useSearchParams();
  const paramValues =
    searchParams.getAll(
      key
    );
  return videoPicsCheck(paramValues);
};
