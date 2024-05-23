import { useSearchParams } from "react-router-dom";
import { SELECTED_PARAM_KEY } from "~/hooks/pic/constants";
import { videoPicsCheck } from "~/hooks/pic/video/read/video-pics-check";

export const useVideoPicsCheck = () => {
  const [searchParams] =
    useSearchParams();
  const paramValues =
    searchParams.getAll(
      SELECTED_PARAM_KEY
    );
  return videoPicsCheck(paramValues);
};
