import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { HOME_PATH_VALUE } from "~/constants/params";
import { useNavigationActive } from "~/hooks/use-navigation/active";
import { TPathValue } from "~/types/params";

export const useNavigationControls = (
  pathValue: TPathValue = HOME_PATH_VALUE
) => {
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const isActive =
    useNavigationActive();

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
