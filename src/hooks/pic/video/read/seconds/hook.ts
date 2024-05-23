import { useSearchParams } from "react-router-dom";
import { SECONDS_PARAM_KEY } from "~/hooks/pic/constants";

export const usePicVideoReadSeconds =
  () => {
    const [searchParams] =
      useSearchParams();
    const seconds = Number(
      searchParams.get(
        SECONDS_PARAM_KEY
      )
    );

    return seconds || 10;
  };
