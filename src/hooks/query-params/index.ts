import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { isNull } from "~/utils/validation/is/null";

export const useQueryParamsSet = (
  key: string // TQueryParamKey,
) => {
  const [searchParams] =
    useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const set = (value: string) => {
    if (!isNull(searchParams)) {
      searchParams.set(key, value);
      const nextPath = `${pathname}?${searchParams.toString()}`;
      navigate(nextPath);
    }
  };

  return {
    curr: searchParams.get(key),
    set,
  };
};
