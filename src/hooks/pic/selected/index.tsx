import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  CELL_PARAM_KEY,
  COLUMNS_COUNT_PARAM_KEY,
  SELECTED_PARAM_KEY,
  SIZE_PARAM_KEY,
} from "~/hooks/pic/constants";
import { paramsMoveToEnd } from "~/utils/params/move-to-end";
import { useSelectedPicsResult } from "~/hooks/pic/selected/pics";
import { videoPicsCheck } from "~/hooks/pic/video/read/video-pics-check";
import { detailsFromSearchParams } from "~/hooks/pic/cell/over/details/from-search-params";
import { useTrillPicsStore } from "~/store/middleware";
import { detailsFromCell } from "~/hooks/pic/cell/over/details/from-cell";
import { TCell } from "~/pics/grid/pic";
import { isDefined } from "~/utils/validation/is/defined";
import { isValue } from "~/utils/validation/is/value";
import { videoReadEntries } from "~/hooks/pic/video/read/entries";
import { TPic } from "~/store/state/pics/types";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { MAX_COUNT } from "~/pages/video/_common/reorder/constants";

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
  const size = Number(
    searchParams.get(SIZE_PARAM_KEY) ??
      0
  );
  const paramValues =
    searchParams.getAll(key);
  const {
    addedCheck,
    removingCheck,
    encryptRemoving,
    decryptRemoving,
    removingInValuesCheck,
  } = videoReadEntries(paramValues);
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
      CELL_PARAM_KEY
    );

    navigate(
      `${pathname}?${searchParams}`
    );
  };
  const { trigger } = useTimebomb(
    200,
    select
  );

  const add = (cell: TCell) => {
    if (cell === null) return;
    const { currName } =
      detailsFromCell({
        cell,
        columnsCount,
        pics,
      });
    if (currName === null) return;

    select([...paramValues, currName]);
  };

  const deselectByCell = (
    cell?: TCell
  ) => {
    let nextName = currName;
    if (isDefined(cell)) {
      const d = detailsFromCell({
        cell,
        columnsCount,
        pics,
      });
      nextName = d.currName;
    }
  };

  const deselect = (name = searchParams.get(key)) => {
    const nextName = name ?? currName;

    if (
      isSelectedPics &&
      isValue(nextName)
    ) {
      const nextDeselectingValues =
        paramValues.map((v) =>
          v === nextName
            ? encryptRemoving(v)
            : v
        );

      select(nextDeselectingValues);

      const nextSelectedValues =
        nextDeselectingValues.filter(
          (v) => !removingCheck(v)
        );
      trigger(nextSelectedValues);
    }
  };

  const isAdded = addedCheck(currName);

  const toggle = () => {
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
    currName &&
    removingInValuesCheck(currName);

  const maybeCheck = (name: TPic) => {
    return (
      name === currName && !isAdded
    );
  };

  return {
    add,
    currName,
    toggle,
    select,
    deselect,
    isAdded,
    maybeCheck,
    isSelectedPics,
    isRemoving,
    size,
    paramValues,
    removingInValuesCheck,
    removingCheck,
    decryptRemoving,
    encryptRemoving,
    searchParams,
    ...selectedPicsResult,
  };
};

export type TUsePicSelected =
  ReturnType<typeof usePicSelected>;
