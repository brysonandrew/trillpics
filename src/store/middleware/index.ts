import { initState } from "~/store/state";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { TPartialAtLeastOne } from "~/types/object";
import { TState } from "~/store/types";
import { TMiddlewares } from "~/store/middleware/types";
import {
  middlewareImmer,
  TImmerStateResult,
} from "~/store/middleware/1.immer";
import {
  middlewareSubscribeWithSelector,
  TSubscribeStateResult,
} from "~/store/middleware/2.subscribe-with-selector";
import {
  middlewarePersist,
  TPersistStateResult,
} from "~/store/middleware/3.persist";
import {
  middlewareDevtools,
  TDevtoolsStateResult,
} from "~/store/middleware/4.devtools";
import {
  middlewareTemporal,
  TTemporalStateResult,
} from "~/store/middleware/5.temporal";
import { PERSIST_STORAGE } from "~/store/middleware/3.persist/storage";
import { OPTIONS_UNDO_REDO } from "~/store/middleware/5.temporal/options";

const stateWithImmer: TImmerStateResult =
  middlewareImmer(initState);

// const stateSubscribeWithSelector: TSubscribeStateResult =
//   middlewareSubscribeWithSelector(
//     stateWithImmer
//   );

// const stateWithPersist: TPersistStateResult =
//   middlewarePersist(
//     stateSubscribeWithSelector,
//     PERSIST_STORAGE
//   );

// const stateWithDevtools: TDevtoolsStateResult =
//   middlewareDevtools(stateWithPersist);

// const stateWithTemporal: TTemporalStateResult =
//   middlewareTemporal(
//     stateWithDevtools,
//     OPTIONS_UNDO_REDO
//   );
export type TStateWithMiddleware =TImmerStateResult;
  // TTemporalStateResult;
const stateWithMiddleware: TStateWithMiddleware =
stateWithImmer;

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
