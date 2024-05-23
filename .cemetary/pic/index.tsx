import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  CELL_PARAM_KEY,
  COLUMNS_COUNT_PARAM_KEY,
  SECONDS_PARAM_KEY,
  VIDEO_PARAM_KEY,
} from "~/hooks/pic/constants";
import { useVideoPicsResult } from "~/hooks/pic/video/pics";
import {
  TPic,
  TPics,
} from "~/store/state/pics/types";
import { isValue } from "~/utils/validation/is/value";
import { useTrillPicsStore } from "~/store/middleware";
import { paramsMoveToEnd } from "~/utils/params/move-to-end";
import { resolveSetArray } from "~/utils/params/set-array";
import { detailsFromSearchParams } from "~/hooks/pic/cell/over/details/from-search-params";
import { TCell } from "~/pics/grid/pic";
import { isDefined } from "~/utils/validation/is/defined";
import { detailsFromCell } from "~/hooks/pic/cell/over/details/from-cell";
import { videoPicsCheck } from "~/hooks/pic/video/read/video-pics-check";
import { videoReadEntries } from "~/hooks/pic/video/read/entries";
import { MAX_COUNT } from "~/pages/video/_common/reorder/constants";

export const usePicVideo = () => {
  const { pics } = useTrillPicsStore(
    ({ pics }) => ({ pics })
  );
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();
  const paramValues =
    searchParams.getAll(
      VIDEO_PARAM_KEY
    );
  const isVideoPics = videoPicsCheck(
    paramValues
  );

  const {
    encryptRemoving,
    addedCheck,
    removingCheck,
  } = videoReadEntries(paramValues);

  const columnsCount = Number(
    searchParams.get(
      COLUMNS_COUNT_PARAM_KEY
    )
  );
  const seconds = Number(
    searchParams.get(SECONDS_PARAM_KEY)
  );
  const cellOverDetailsResult =
    detailsFromSearchParams({
      searchParams,
      pics,
      columnsCount,
    });

  const { currName } =
    cellOverDetailsResult;

  const isCurrName = isValue(currName);

  const picsResult = useVideoPicsResult(
    {
      isVideoPics,
      paramValues,
      currName,
      columnsCount,
    }
  );

  const isCurrAdded =
    addedCheck(currName);

  const maybeCheck = (name: TPic) => {
    return (
      name === currName && !isCurrAdded
    );
  };

  const add = (cell?: TCell) => {
    let nextName = currName;
    if (isDefined(cell)) {
      const d = detailsFromCell({
        cell,
        columnsCount,
        pics,
      });
      nextName = d.currName;
    }

    if (isValue(nextName)) {
      if (
        paramValues.length > MAX_COUNT
      ) {
        console.log(
          "ecceeded limit",
          paramValues,
          paramValues.length
        );
      }
      searchParams.append(
        VIDEO_PARAM_KEY,
        nextName
      );
      const r = paramsMoveToEnd(
        searchParams,
        CELL_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
  };

  const setPics = (
    nextNames: TPics
  ) => {
    const r = resolveSetArray(
      searchParams,
      VIDEO_PARAM_KEY,
      nextNames
    );

    const r1 = paramsMoveToEnd(
      searchParams,
      CELL_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const clearRemoving = () => {
    const nextValues =
      paramValues.filter(
        (v) => !removingCheck(v)
      );
    setPics(nextValues);
  };

  const remove = (cell?: TCell) => {
    let nextName = currName;
    if (isDefined(cell)) {
      const d = detailsFromCell({
        cell,
        columnsCount,
        pics,
      });
      nextName = d.currName;
    }
    if (
      isVideoPics &&
      isValue(nextName)
    ) {
      const nextValues =
        paramValues.map((v) =>
          v === nextName
            ? encryptRemoving(v)
            : v
        );

      setPics(nextValues);
    }
  };

  const toggle = () => {
    if (isCurrAdded) {
      return remove();
    }
    return add();
  };

  const clear = () => {
    searchParams.delete(
      VIDEO_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const reorder = (nextPics: TPics) => {
    setPics(nextPics);
  };
  const setDurationInSeconds = (
    value: number
  ) => {
    searchParams.set(
      SECONDS_PARAM_KEY,
      `${value}`
    );
    paramsMoveToEnd(
      searchParams,
      CELL_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  return {
    isVideoPics,
    isCurrAdded,
    isCurrName,
    seconds,
    clearRemoving,
    maybeCheck,
    addedCheck,
    toggle,
    add,
    remove,
    clear,
    reorder,
    setDurationInSeconds,
    removingCheck,
    encryptRemoving,
    setPics,
    ...cellOverDetailsResult,
    ...picsResult,
  };
};
export type TUsePicVideoResult =
  ReturnType<typeof usePicVideo>;
