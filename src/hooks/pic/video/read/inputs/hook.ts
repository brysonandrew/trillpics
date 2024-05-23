import { useSearchParams } from "react-router-dom";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { picVideoReadInputs } from "~/hooks/pic/video/read/inputs";

export const usePicVideoReadInputs =
  (): TPicSeriesProps => {
    const [searchParams] =
      useSearchParams();
    const {
      seconds,
      pics,
      isPics,
      count,
    } = picVideoReadInputs(
      searchParams
    );
    return {
      seconds,
      pics,
      count,
      isPics,
    };
  };
