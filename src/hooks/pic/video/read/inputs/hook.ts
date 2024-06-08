import { useSearchParams } from "react-router-dom";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import {
  DIMENSIONS,
  PIC_DIMENSIONS,
} from "~/constants/remotion";
import { picVideoReadInputs } from "~/hooks/pic/video/read/inputs";
import { dimensionsWithinPlayerBounds } from "~/hooks/within-player-bounds";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";

export const usePicVideoReadInputs =
  (): TPicSeriesProps => {
    const [searchParams] =
      useSearchParams();
    const { fps } =
      useContextPlayer_Init();
    const {
      seconds,
      pics,
      isPics,
      count,
      audioSrc,
    } = picVideoReadInputs(
      searchParams,
      fps
    );
    const canvasDimensions = DIMENSIONS;
    const dimensions =
      dimensionsWithinPlayerBounds({
        canvasDimensions,
        ...PIC_DIMENSIONS,
        fillMode: "cover",
      });
    const result = {
      seconds,
      pics,
      count,
      isPics,
      dimensions,
      durationInFrames: seconds * fps,
      audioSrc,
      fps,
    };
    return result;
  };
