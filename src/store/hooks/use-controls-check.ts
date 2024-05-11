import { useTrillPicsStore } from "~/store/middleware";

export const useControlsCheck = () => {
  const { isControls } =
    useTrillPicsStore(
      ({ isControls }) => ({
        isControls,
      })
    );

  return isControls;
};
