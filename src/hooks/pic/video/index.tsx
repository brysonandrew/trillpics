import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  COLUMNS_COUNT_PARAM_KEY,
  DELIMITER_VIDEO_PICS,
  SECONDS_PARAM_KEY,
  VIDEO_PARAM_KEY,
} from "~/hooks/pic/constants";
import { useVideoPicsResult } from "~/hooks/pic/video/pics";
import { TPics } from "~/store/state/pics/types";
import { isValue } from "~/utils/validation/is/value";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveCellOverDetails } from "~/hooks/pic/cell/over/details";
import { resolveVideoPicAddedRx } from "~/hooks/pic/video/pic-added-rx";

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
      searchParams,
      currKey,
    }
  );

  const isCurrAdded =
    isVideoPics &&
    isCurrName &&
    paramValues.includes(`${currName}`);
  console.log(
    isCurrAdded,
    isVideoPics,
    isCurrName,
    paramValues,
    currName
  );
  const add = () => {
    if (isCurrName) {
      searchParams.append(
        VIDEO_PARAM_KEY,
        `${currName}`
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
      const rx =
        resolveVideoPicAddedRx(
          currName
        );
      const nextValues =
        paramValues.filter(
          (v) => v !== currName
        );
      searchParams.delete(
        VIDEO_PARAM_KEY
      );
      nextValues.forEach((value) => {
        searchParams.append(
          VIDEO_PARAM_KEY,
          `${value}`
        );
      });

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
    searchParams.set(
      VIDEO_PARAM_KEY,
      nextValue
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
