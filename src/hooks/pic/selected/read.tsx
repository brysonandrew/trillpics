import { useSearchParams } from "react-router-dom";
import {
  REMOVING_PARAM_KEY,
  SELECTED_PARAM_KEY,
} from "~/hooks/pic/constants";

export const usePicSelectedRead = (
  name: string,
  key = SELECTED_PARAM_KEY
) => {
  const [searchParams] =
    useSearchParams();
  const paramValues =
    searchParams.getAll(key);
  const removingParamValues =
    searchParams.getAll(
      REMOVING_PARAM_KEY
    );

  const isRemoving =
    removingParamValues.includes(name);

  return {
    isSelected:
      paramValues.includes(name),
    isRemoving,
  };
};
