import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import {
  MODE_PARAM_KEY, VIDEO_ROUTE,
} from "~/constants/params";

type TPagePathValue =
  | typeof VIDEO_ROUTE
  | null;
export const useMode = () => {
  const location = useLocation();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const modeParamValue =
    searchParams.get(MODE_PARAM_KEY);
  const isVideo =
    modeParamValue ===
    VIDEO_ROUTE;
  const toggleVideo = (
    nextMode?: TPagePathValue
  ) => {
    if (nextMode) {
      searchParams.set(
        MODE_PARAM_KEY,
        nextMode
      );
    } else {
      if (isVideo) {
        searchParams.delete(
          MODE_PARAM_KEY
        );
      } else {
        searchParams.set(
          MODE_PARAM_KEY,
          VIDEO_ROUTE
        );
      }
    }
    navigate(
      `${location}?${searchParams}`
    );
  };

  return {
    isVideo,
    toggleVideo,
  };
};
