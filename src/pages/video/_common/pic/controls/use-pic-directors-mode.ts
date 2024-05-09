import { useTrillPicsStore } from "~/store";

export const SEARCH_PARAM_KEY = "open";

export type TUsePicVideoControlsConfig =
  { videoOrder: number };
export const usePicVideoControls = ({
  videoOrder,
}: TUsePicVideoControlsConfig) => {
  const { isControls } =
    useTrillPicsStore(
      ({ isControls }) => ({
        isControls,
      })
    );

  return {
    videoOrder,
    isControls,
  };
};

export type TUsePicVideoControls =
  ReturnType<
    typeof usePicVideoControls
  >;
