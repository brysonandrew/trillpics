import { useTrillPicsStore } from "~/store";

export const useUpdateStateHandler =
  () => {
    const { set } =
      useTrillPicsStore(
        ({ set }) => ({
          set,
        })
      );
    return set;
  };
