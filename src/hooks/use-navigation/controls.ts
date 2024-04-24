import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import { TPathValue } from "~/types/params";

export const useNavigationControls = (
  pathValue: TPathValue = "/"
) => {
  const location = useLocation();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const isActive =
    location.pathname.includes(
      pathValue
    );
  const togglePathValue = (
    nextPathValue?: TPathValue
  ) => {
    let nextPath = "/";
    if (nextPathValue || !isActive) {
      nextPath =
        nextPathValue ?? pathValue;
    }
    const nextPathWithParams = `${nextPath}?${searchParams}`;
    console.log(nextPathWithParams);

    navigate(nextPathWithParams);
  };

  return {
    isActive,
    togglePathValue,
  };
};
