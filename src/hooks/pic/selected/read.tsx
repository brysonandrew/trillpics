import { useSearchParams } from "react-router-dom";
import { TCell } from "~/pics/grid/pic";
import { SELECTED_PARAM_KEY } from "~/hooks/pic/constants";
import { useDetailsFromCell } from "~/hooks/pic/cell/over/details/hook";
import { decryptRemoving, removingCheck, videoReadEntries } from "~/hooks/pic/video/read/entries";

export const usePicSelectedRead = (
  name: string,
  key = SELECTED_PARAM_KEY
) => {
  const [searchParams] =
    useSearchParams();
  const paramValues =
    searchParams.getAll(key);

  const removingInValuesCheck = (
    name: string
  ) =>
    paramValues.some(
      (v) =>
        removingCheck(v) &&
        decryptRemoving(v) === name
    );

  const isRemoving =
  removingInValuesCheck(name);

  return {
    isSelected:
      paramValues.includes(name),
    isRemoving,
  };
};
