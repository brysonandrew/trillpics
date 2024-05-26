import { useSearchParams } from "react-router-dom";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import {
  DIMENSIONS,
  PIC_DIMENSIONS,
} from "~/constants/remotion";
import { picVideoReadInputs } from "~/hooks/pic/video/read/inputs";
import { dimensionsWithinPlayerBounds } from "~/hooks/within-player-bounds";

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
    const canvasDimensions = DIMENSIONS;
    const dimensions =
      dimensionsWithinPlayerBounds({
        canvasDimensions,
        ...PIC_DIMENSIONS,
        fillMode: "cover",
      });
    return {
      seconds,
      pics,
      count,
      isPics,
      dimensions,
    };
  };
