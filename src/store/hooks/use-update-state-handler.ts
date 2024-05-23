import { useTrillPicsStore } from "~/store/middleware";

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
