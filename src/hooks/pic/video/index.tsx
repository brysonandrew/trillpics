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
  ZOOM_PARAM_CLOSING_VALUE,
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
import { isNull } from "~/utils/validation/is/null";
import { detailsFromSearchParams } from "~/hooks/pic/cell/over/details/from-search-params";
import { TCell } from "~/pics/grid/pic";
import { isDefined } from "~/utils/validation/is/defined";
import { detailsFromCell } from "~/hooks/pic/cell/over/details/from-cell";

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
  const isVideoPics =
    Array.isArray(paramValues) &&
    paramValues.length > 0;

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

  const addedCheck = (
    nextName: TPic | null
  ) => {
    return (
      !isNull(nextName) &&
      isValue(nextName) &&
      isVideoPics &&
      paramValues.includes(
        `${nextName}`
      )
    );
  };

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
      if (searchParams.size === 5) {
        const r = resolveSetArray(
          searchParams,
          VIDEO_PARAM_KEY,
          [
            ...paramValues.slice(1),
            nextName,
          ]
        );
      }
      searchParams.append(
        VIDEO_PARAM_KEY,
        `${nextName}`
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

  const removingCheck = (
    name: string
  ) =>
    paramValues.some(
      (v) =>
        v ===
        `${name}${ZOOM_PARAM_CLOSING_VALUE}`
    );

  const clearRemoving = () => {
    const nextValues =
      paramValues.filter(
        (v) =>
          !v.endsWith(
            ZOOM_PARAM_CLOSING_VALUE
          )
      );
    const r = resolveSetArray(
      searchParams,
      VIDEO_PARAM_KEY,
      nextValues
    );

    const r1 = paramsMoveToEnd(
      searchParams,
      CELL_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const remove = () => {
    if (
      Array.isArray(paramValues) &&
      isCurrName
    ) {
      const nextValues =
        paramValues.map((v) =>
          v === currName
            ? `${v}${ZOOM_PARAM_CLOSING_VALUE}`
            : v
        );

      const r = resolveSetArray(
        searchParams,
        VIDEO_PARAM_KEY,
        nextValues
      );

      const r1 = paramsMoveToEnd(
        searchParams,
        CELL_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
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
    resolveSetArray(
      searchParams,
      VIDEO_PARAM_KEY,
      nextPics.map((v) => v.toString())
    );
    paramsMoveToEnd(
      searchParams,
      CELL_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
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
    ...cellOverDetailsResult,
    ...picsResult,
  };
};
export type TUsePicVideoResult =
  ReturnType<typeof usePicVideo>;
