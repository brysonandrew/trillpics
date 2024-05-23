import { useSearchParams } from "react-router-dom";
import { TCell } from "~/pics/grid/pic";
import { SELECTED_PARAM_KEY } from "~/hooks/pic/constants";
import { isString } from "~/utils/validation/is/string";
import { useDetailsFromCell } from "~/hooks/pic/cell/over/details/hook";
import { isNull } from "~/utils/validation/is/null";
import { videoReadEntries } from "~/hooks/pic/video/read/entries";

export const usePicSelectedRead = (
  currCell: TCell
) => {
  const [searchParams] =
    useSearchParams();
  const paramValues =
    searchParams.getAll(
      SELECTED_PARAM_KEY
    );

  const {
    addedCheck,
    removingCheck,
    encryptRemoving,
    decryptRemoving,
    removingInValuesCheck,
  } = videoReadEntries(paramValues);

  const d =
    useDetailsFromCell(currCell);
  const isRemoving =
    d?.currName &&
    removingInValuesCheck(d.currName);
  return {
    isSelected:
      !isNull(d) &&
      isString(d.currName) &&
      paramValues.includes(d.currName),
    isRemoving,
  };
};
