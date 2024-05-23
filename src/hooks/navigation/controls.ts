import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useNavigationActive } from "~/hooks/navigation/active";
import { TPathValue } from "~/types/params";
import { HOME_ROUTE } from "~/constants/params";

export const useNavigationControls = (
  pathValue: TPathValue = HOME_ROUTE
) => {
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const isActive =
    useNavigationActive(pathValue);

  const togglePathValue = (
    nextPathValue?: TPathValue
  ) => {
    let nextPath = "/";
    if (nextPathValue || !isActive) {
      nextPath =
        nextPathValue ?? pathValue;
    }
    const nextPathWithParams = `${nextPath}?${searchParams}`;

    navigate(nextPathWithParams);
  };

  return {
    isActive,
    togglePathValue,
  };
};
