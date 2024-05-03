import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { TPartialAtLeastOne } from "~/types/object";
import { TState } from "~/store/types";
import { TMiddlewares } from "~/store/middleware/types";
import { stateWithMiddleware } from "~/store/middleware";

export const useTrillPicsStoreBase =
  create<TState>()<TMiddlewares>(
    stateWithMiddleware
  );

export const useTrillPicsStore = <
  T extends TPartialAtLeastOne<TState>
>(
  selector: (state: TState) => T
) => {
  const shallow = useShallow<TState, T>(
    selector
  );
  const result =
    useTrillPicsStoreBase(shallow);
  return result;
};
