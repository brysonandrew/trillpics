import { useSearchParams } from "react-router-dom";
import { COLUMNS_COUNT_PARAM_KEY, SIZE_PARAM_KEY } from "~/hooks/pic/constants";

export const usePicTableReadColumnsCount =
  () => {
    const [searchParams] =
      useSearchParams();

    const size = Number(
      searchParams.get(COLUMNS_COUNT_PARAM_KEY)
    );

    return size;
  };
