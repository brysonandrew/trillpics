import { useSearchParams } from "react-router-dom";
import { SIZE_PARAM_KEY } from "~/hooks/pic/constants";

export const usePicTableReadSize =
  () => {
    const [searchParams] =
      useSearchParams();

    const size = Number(
      searchParams.get(SIZE_PARAM_KEY)
    );

    return size;
  };
