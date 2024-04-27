import { useTrillPicsStore } from "~/store";

export const useControlsCheck = () => {
  const { isControls } =
    useTrillPicsStore(
      ({ isControls }) => ({
        isControls,
      })
    );

  return isControls;
};
