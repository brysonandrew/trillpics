import { useSearchParams } from "react-router-dom";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { PIC_DIMENSIONS } from "~/constants/remotion";
import {
  SECONDS_PARAM_KEY,
  SELECTED_PARAM_KEY,
} from "~/hooks/pic/constants";

export const picVideoReadInputs = (
  searchParams: URLSearchParams
): TPicSeriesProps => {
  const seconds = Number(
    searchParams.get(SECONDS_PARAM_KEY)
  );
  const pics = searchParams.getAll(
    SELECTED_PARAM_KEY
  );
  const count = pics.length;
  const isPics = count > 0;
  return {
    seconds,
    pics,
    count,
    isPics,
    dimensions: PIC_DIMENSIONS,
  };
};
