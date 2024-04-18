import { useVideoStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

export const useUpdateStateHandler =
  () => {
    const { updateState } =
      useVideoStore(
        useShallow(
          ({ updateState }) => ({
            updateState,
          })
        )
      );
    return updateState;
  };
