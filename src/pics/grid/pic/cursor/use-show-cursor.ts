import { useMemo } from "react";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { useTrillPicsStore } from "~/store/middleware";

export type TUseShowCursorConfig =
  TUsePicSelected & {
    isDisabled?: boolean;
  };
export const useShowCursor = ({
  isDisabled,
  ...props
}: TUseShowCursorConfig) => {
  const isCurrCell =
    props.currCell !== null;
  const {
    isScrolling,
    isOnscreen,
    isControls,
    isActiveHover,
  } = useTrillPicsStore(
    ({
      isScrolling,
      isOnscreen,
      isControls,
      isActiveHover,
    }) => ({
      isScrolling,
      isOnscreen,
      isControls,
      isActiveHover,
    })
  );

  const isShown = useMemo(() => {
    // console.log(`!isScrolling && ${!isScrolling}
    // !isActiveHover && ${!isActiveHover}
    // !isDisabled && ${!isDisabled}
    // isOnscreen && ${isOnscreen}
    // isControls && ${isControls}
    // isReady; ${isReady}`)
    const result =
      !isScrolling &&
      !isActiveHover &&
      !isDisabled &&
      isOnscreen &&
      isControls &&
      isCurrCell;
    return result;
  }, [
    isActiveHover,
    isDisabled,
    isOnscreen,
    isControls,
    isScrolling,
    isCurrCell,
  ]);

  return isShown;
};
export type TUseShowCursorResult =
  ReturnType<typeof useShowCursor>;
