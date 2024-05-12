import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  CELL_PARAM_KEY,
  COLUMNS_COUNT_PARAM_KEY,
  DELIMITER_VIDEO_PICS,
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

  const { currName, currKey } =
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

  const isCurrAdded =
    addedCheck(currName);

  // console.log(
  //   isCurrAdded,
  //   isVideoPics,
  //   isCurrName,
  //   currName,
  //   paramValues
  // );
  const add = () => {
    if (isCurrName) {
      searchParams.append(
        VIDEO_PARAM_KEY,
        `${currName}`
      );
      paramsMoveToEnd(
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

      resolveSetArray(
        searchParams,
        VIDEO_PARAM_KEY,
        nextValues
      );

      paramsMoveToEnd(
        searchParams,
        CELL_PARAM_KEY
      );

      navigate(
        `${pathname}?${searchParams}`
      );
    }
  };
  const toggle = () => {
    console.log(currName, currKey);

    console.log(
      `toggle.isCurrAdded ${isCurrAdded}`
    );
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
    console.log("reorder", nextPics);
    const nextValue = nextPics.join(
      DELIMITER_VIDEO_PICS
    );
    console.log(nextValue);
    resolveSetArray(
      searchParams,
      VIDEO_PARAM_KEY,
      nextPics.map((v) => v.toString())
    );

    paramsMoveToEnd(
      searchParams,
      CELL_PARAM_KEY
    );
    // searchParams.set(
    //   VIDEO_PARAM_KEY,
    //   nextValue
    // );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  return {
    isVideoPics,
    isCurrAdded,
    isCurrName,
    seconds,
    addedCheck,
    toggle,
    add,
    remove,
    clear,
    reorder,
    ...cellOverDetailsResult,
    ...picsResult,
  };
};
export type TUsePicVideoResult =
  ReturnType<typeof usePicVideo>;
