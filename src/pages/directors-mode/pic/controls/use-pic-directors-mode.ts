import { useTrillPicsStore } from "~/store";

export const SEARCH_PARAM_ID = "open";

export type TUsePicDirectorsModeControlsConfig =
  { videoOrder: number };
export const usePicDirectorsModeControls =
  ({
    videoOrder,
  }: TUsePicDirectorsModeControlsConfig) => {
    const { isControls } =
      useTrillPicsStore(
        ({ isControls }) => ({
          isControls,
        })
      );

    return {
      videoOrder,
      isAdded,
      isControls,
    };
  };

export type TUsePicDirectorsModeControls =
  ReturnType<
    typeof usePicDirectorsModeControls
  >;
