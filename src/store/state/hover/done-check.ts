import { TGet } from "~/store/types";

export const hoverDoneCheck =
  (get: TGet) => (): boolean => {
    return (
      !Boolean(
        get().hoverKeyCooldown
      ) && get().hoverKeys.length === 0
    );
  };
