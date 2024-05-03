import { initState } from "~/store/state";
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

const stateSubscribeWithSelector: TSubscribeStateResult =
  middlewareSubscribeWithSelector(
    stateWithImmer
  );

const stateWithPersist: TPersistStateResult =
  middlewarePersist(
    stateSubscribeWithSelector,
    PERSIST_STORAGE
  );

const stateWithDevtools: TDevtoolsStateResult =
  middlewareDevtools(stateWithPersist);

const stateWithTemporal: TTemporalStateResult =
  middlewareTemporal(
    stateWithDevtools,
    OPTIONS_UNDO_REDO
  );
export type TStateWithMiddleware =
  TTemporalStateResult;
export const stateWithMiddleware: TStateWithMiddleware =
  stateWithTemporal;
