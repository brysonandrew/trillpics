import { useLocation } from "react-router";
import { HOME_PATH_VALUE } from "~/constants/params";
import { TPathValue } from "~/types/params";

export const useNavigationActive = (
  pathValue: TPathValue = HOME_PATH_VALUE
) => {
  const location = useLocation();
  const isActive =
    location.pathname.includes(
      pathValue
    );
  return isActive;
};
