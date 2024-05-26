import { useMemo } from "react";
import { useImageDimensions } from "@brysonandrew/measure";
import { DIMENSIONS } from "~/constants/remotion";
import { useTrillPicsStore } from "~/store/middleware";
import { DEFAULT_INPUT } from "~/pages/video/player/_header/download";
import { useContextGrid } from "~/context";

export const useRemotionProps = (
  picVideoInputs = DEFAULT_INPUT[
    "input"
  ]
) => {
  const { fps, pics: allPics } =
    useTrillPicsStore(
      ({ fps, pics }) => ({
        fps,
        pics,
      })
    );
    const { screen } = useContextGrid();

  const dimensions = useImageDimensions(
    {
      box: screen.container,
      image: DIMENSIONS,
    }
  );

  const pics = useMemo(() => {
    return picVideoInputs.isPics
      ? picVideoInputs.pics
      : [...Array(5)].map(
          () =>
            `${Math.floor(
              allPics.length *
                Math.random()
            )}`
        );
  }, [picVideoInputs]);

  const seconds =
    picVideoInputs.seconds || 10;
  const count = pics.length;

  return {
    fps,
    props: {
      pics,
      count,
      seconds,
      isPics: count > 0,
    },
    ...(dimensions.isDimensions
      ? dimensions
      : DIMENSIONS),
  };
};
