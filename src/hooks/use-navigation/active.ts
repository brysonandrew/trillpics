import { useLocation } from "react-router";
import { TPathValue } from "~/types/params";
import { HOME_ROUTE } from "~/constants/params";

export const useNavigationActive = (
  pathValue: TPathValue = HOME_ROUTE
) => {
  const location = useLocation();
  const isActive =
    location.pathname === pathValue;
  return isActive;
};
