import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  OVER_CELL_PARAM_KEY,
  COLUMNS_COUNT_PARAM_KEY,
  SELECTED_PARAM_KEY,
  SIZE_PARAM_KEY,
  REMOVING_PARAM_KEY,
} from "~/hooks/pic/constants";
import { paramsMoveToEnd } from "~/utils/params/move-to-end";
import { useSelectedPicsResult } from "~/hooks/pic/selected/pics";
import { videoPicsCheck } from "~/hooks/pic/video/read/video-pics-check";
import { detailsFromSearchParams } from "~/hooks/pic/cell/over/details/from-search-params";
import { useTrillPicsStore } from "~/store/middleware";
import { detailsFromCell } from "~/hooks/pic/cell/over/details/from-cell";
import { TCell } from "~/pics/grid/pic";
import { isValue } from "~/utils/validation/is/value";
import { videoReadEntries } from "~/hooks/pic/video/read/entries";
import { TPic } from "~/store/state/pics/types";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { isDefined } from "~/utils/validation/is/defined";

export const usePicSelected = (
  key = SELECTED_PARAM_KEY
) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();
  const { pics } = useTrillPicsStore(
    ({ pics }) => ({ pics })
  );
  const paramValues =
    searchParams.getAll(key);
  const removingParamValues =
    searchParams.getAll(
      REMOVING_PARAM_KEY
    );

  const { addedCheck, removingCheck } =
    videoReadEntries(
      paramValues,
      removingParamValues
    );

  const isSelectedPics = videoPicsCheck(
    paramValues
  );

  const columnsCount = Number(
    searchParams.get(
      COLUMNS_COUNT_PARAM_KEY
    )
  );

  const cellOverDetailsResult =
    detailsFromSearchParams({
      searchParams,
      pics,
      columnsCount,
    });

  const { currName } =
    cellOverDetailsResult;
  const selectedPicsResult =
    useSelectedPicsResult({
      isSelectedPics,
      paramValues,
      currName,
      columnsCount,
    });

  const select = (
    nextNames = currName
      ? [currName]
      : null
  ) => {
    if (nextNames === null) return;

    const maxedNames = nextNames.slice(
      Math.max(
        nextNames.length - MAX_COUNT,
        0
      )
    );
    searchParams.delete(key);
    maxedNames.forEach((name) => {
      if (name) {
        searchParams.append(key, name);
      }
    });

    const r1 = paramsMoveToEnd(
      searchParams,
      OVER_CELL_PARAM_KEY
    );

    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const handleRemovingClear = () => {
    searchParams.delete(
      REMOVING_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const { trigger } = useTimebomb(
    200,
    handleRemovingClear
  );

  const add = (
    name: string,
    replace?: string
  ) => {
  

    const next = isDefined(replace)
      ? paramValues.map((v) =>
          v === replace ? name : v
        )
      : [...paramValues, name];

    select(next);
  };

  const deselect = (
    name = currName
  ) => {
    const nextName = name ?? currName;

    if (
      isSelectedPics &&
      isValue(nextName)
    ) {
      searchParams.append(
        REMOVING_PARAM_KEY,
        nextName
      );
      const nextDeselectingValues =
        paramValues.filter(
          (v) => v !== nextName
        );

      select(nextDeselectingValues);

      trigger();
    }
  };

  const isAdded = addedCheck(currName);

  const toggle = () => {
    // console.log('isAdded',isAdded,currName,cellOverDetailsResult.currName)
    if (isAdded) {
      deselect();
      return;
    }
    if (currName) {
      select([
        ...paramValues,
        currName,
      ]);
    }
  };
  const isRemoving =
    currName && removingCheck(currName);

  const maybeCheck = (name: TPic) => {
    return (
      name === currName && !isAdded
    );
  };

  return {
    add,
    toggle,
    select,
    deselect,
    isAdded,
    maybeCheck,
    isSelectedPics,
    isRemoving,
    paramValues,
    removingParamValues,
    removingCheck,
    searchParams,
    detailsFromCell,
    columnsCount,
    pics,
    ...cellOverDetailsResult,
    ...selectedPicsResult,
  };
};

export type TUsePicSelected =
  ReturnType<typeof usePicSelected>;
