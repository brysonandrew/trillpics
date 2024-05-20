import { useSearchParams } from "react-router-dom";
import { VIDEO_PARAM_KEY } from "~/hooks/pic/constants";
import { videoReadEntries } from "~/hooks/pic/video/read/entries";

export const useVideoReadEntries = () => {
  const [searchParams] =
    useSearchParams();
  const paramValues =
    searchParams.getAll(
      VIDEO_PARAM_KEY
    );
  return videoReadEntries(paramValues);
};
