import { useTrillPicsStore } from "~/store";

export const useUpdateStateHandler =
  () => {
    const { updateState } =
      useTrillPicsStore(
        ({ updateState }) => ({
          updateState,
        })
      );
    return updateState;
  };
