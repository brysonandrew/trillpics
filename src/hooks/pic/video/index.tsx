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
import { resolveCellOverDetails } from "~/hooks/pic/cell/over/details";
import { paramsMoveToEnd } from "~/utils/params/move-to-end";
import { resolveSetArray } from "~/utils/params/set-array";
import { isNull } from "~/utils/validation/is/null";

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
    resolveCellOverDetails({
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
    currName: TPic | null
  ) => {
    return (
      !isNull(currName) &&
      isVideoPics &&
      isCurrName &&
      paramValues.includes(
        `${currName}`
      )
    );
  };

  const maybeCheck = (name: TPic) => {
    return (
      name === currName && !isCurrAdded
    );
  };

  const isCurrAdded =
    addedCheck(currName);

  const add = () => {
    if (isCurrName) {
      searchParams.append(
        VIDEO_PARAM_KEY,
        `${currName}`
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

  const remove = () => {
    if (
      Array.isArray(paramValues) &&
      isCurrName
    ) {
      const nextValues =
        paramValues.filter(
          (v) => v !== currName
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
  const setDurationInSeconds = (value:number) => {
    searchParams.set(SECONDS_PARAM_KEY,`${value}`)
    paramsMoveToEnd(
      searchParams,
      CELL_PARAM_KEY
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  }

  return {
    isVideoPics,
    isCurrAdded,
    isCurrName,
    seconds,
    maybeCheck,
    addedCheck,
    toggle,
    add,
    remove,
    clear,
    reorder,
    setDurationInSeconds,
    ...cellOverDetailsResult,
    ...picsResult,
  };
};
export type TUsePicVideoResult =
  ReturnType<typeof usePicVideo>;
