import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { OVER_CELL_PARAM_KEY, SELECTED_PARAM_KEY } from "~/hooks/pic/constants";
import { paramsMoveToEnd } from "~/utils/params/move-to-end";

export const usePicSelectedWrite = (
  key = SELECTED_PARAM_KEY
) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();

  const handler = (
    nextNames: string[]
  ) => {
    searchParams.delete(key);
    nextNames.forEach((name) => {
      if (name) {
        searchParams.append(key, name);
      }
    });
    paramsMoveToEnd(
      searchParams,
      OVER_CELL_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  return handler;
};
