import { useSearchParams } from "react-router-dom";
import { VIDEO_PARAM_KEY } from "~/hooks/pic/constants";
import { videoPicsCheck } from "~/hooks/pic/video/read/video-pics-check";

export const useVideoPicsCheck = () => {
  const [searchParams] =
    useSearchParams();
  const paramValues =
    searchParams.getAll(
      VIDEO_PARAM_KEY
    );
  return videoPicsCheck(paramValues);
};
