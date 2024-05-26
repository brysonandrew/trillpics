import { useMemo } from "react";
import { useTrillPicsStore } from "~/store/middleware";

export type TUseShowCursorConfig = {
  isDisabled?: boolean;
};
export const useShowCursor = ({
  isDisabled,
}: TUseShowCursorConfig) => {
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
      isControls;
    return result;
  }, [
    isActiveHover,
    isDisabled,
    isOnscreen,
    isControls,
    isScrolling,
  ]);

  return isShown;
};
export type TUseShowCursorResult =
  ReturnType<typeof useShowCursor>;
