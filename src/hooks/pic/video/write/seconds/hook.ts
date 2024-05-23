import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  CELL_PARAM_KEY,
  SECONDS_PARAM_KEY,
} from "~/hooks/pic/constants";
import { paramsMoveToEnd } from "~/utils/params/move-to-end";

export const usePicVideoWriteSeconds =
  () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [searchParams] =
      useSearchParams();
    const seconds = Number(
      searchParams.get(
        SECONDS_PARAM_KEY
      )
    );

    const setDurationInSeconds = (
      value: number
    ) => {
      searchParams.set(
        SECONDS_PARAM_KEY,
        `${value}`
      );
      paramsMoveToEnd(
        searchParams,
        CELL_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    };

    return {
      seconds,
      setDurationInSeconds,
    };
  };
