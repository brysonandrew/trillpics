import { PersistOptions } from "zustand/middleware";

type PersistListener<S> = (
  state: S
) => void;
type StorePersist<S, Ps> = {
  persist: {
    setOptions: (
      options: Partial<
        PersistOptions<S, Ps>
      >
    ) => void;
    clearStorage: () => void;
    rehydrate: () => Promise<void> | void;
    hasHydrated: () => boolean;
    onHydrate: (
      fn: PersistListener<S>
    ) => () => void;
    onFinishHydration: (
      fn: PersistListener<S>
    ) => () => void;
    getOptions: () => Partial<
      PersistOptions<S, Ps>
    >;
  };
};
