import { useVideoStore } from "~/store";
import { useShallow } from "zustand/react/shallow";

export const useControlsCheck = () => {
  const { isControls } = useVideoStore(
    useShallow(({ isControls }) => ({
      isControls,
    }))
  );
  return isControls;
};
