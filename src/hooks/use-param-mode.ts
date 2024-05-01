import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import {
  DIRECTORS_MODE_PATH_VALUE,
  MODE_PARAM_KEY,
} from "~/constants/params";

type TPagePathValue =
  | typeof DIRECTORS_MODE_PATH_VALUE
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
    DIRECTORS_MODE_PATH_VALUE;
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
          DIRECTORS_MODE_PATH_VALUE
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
