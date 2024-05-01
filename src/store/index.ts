import { STORAGE } from "~/store/middleware/persist/storage";
import {
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  create,
  Mutate,
  StoreApi,
  UseBoundStore,
} from "zustand";
import { enableMapSet } from "immer";
import { temporal } from "zundo";
import { OPTIONS_UNDO_REDO } from "~/store/middleware/temporal";
import { useShallow } from "zustand/react/shallow";
import { TPartialAtLeastOne } from "~/types/object";
import { TPersistState } from "~/store/middleware/persist/types";
import {
  TTemporalPartializedState,
  TTemporalState,
} from "~/store/middleware/temporal/types";
import { TState } from "~/store/types";
import { coreState } from "~/store/state/core/state";
import { directorState } from "~/store/state/director/state";
import { hoverState } from "~/store/state/hover/state";
import { picsState } from "~/store/state/pics/state";
import { playerState } from "~/store/state/player/state";
import { tableState } from "~/store/state/table/state";
import { scrollState } from "~/store/state/scroll";

enableMapSet();

// 1. immer

const createImmerState = immer<
  TState,
  [
    [
      "zustand/subscribeWithSelector",
      never
    ]
  ],
  []
>((...a) => {
  return {
    ...coreState(...a),
    ...scrollState(...a),
    ...tableState(...a),
    ...directorState(...a),
    ...picsState(...a),
    ...hoverState(...a),
    ...playerState(...a),
    updateState: a[0],
  };
});

// 2. subscribe

const createSubscribeState =
  subscribeWithSelector<
    TState,
    [["zustand/persist", unknown]],
    [["zustand/immer", never]]
  >(createImmerState);

// 3. persist
const createPersistState = persist<
  TState,
  [["zustand/devtools", never]],
  [
    [
      "zustand/subscribeWithSelector",
      never
    ],
    ["zustand/immer", never]
  ],
  TPersistState
>(createSubscribeState, STORAGE);

// 4. devtools

const createDevtoolsState = devtools<
  TState,
  [["temporal", unknown]],
  [
    ["zustand/persist", TPersistState],
    [
      "zustand/subscribeWithSelector",
      never
    ],
    ["zustand/immer", never]
  ]
>(createPersistState);

// 4. zundo (undo redo)

const createZundoState = temporal<
  TState,
  [],
  [
    ["zustand/devtools", never],
    ["zustand/persist", TPersistState],
    [
      "zustand/subscribeWithSelector",
      never
    ],
    ["zustand/immer", never]
  ],
  TTemporalPartializedState
>(
  createDevtoolsState,
  OPTIONS_UNDO_REDO
);

type TMiddlewares = [
  [
    "temporal",
    StoreApi<TTemporalState>
  ],
  ["zustand/devtools", never],
  ["zustand/persist", TPersistState],
  [
    "zustand/subscribeWithSelector",
    never
  ],
  ["zustand/immer", never]
];

type TStore = UseBoundStore<
  Mutate<StoreApi<TState>, TMiddlewares>
>;

export const useTrillPicsStoreBase: TStore =
  create<TState>()<TMiddlewares>(
    createZundoState
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
