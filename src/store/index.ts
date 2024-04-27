import { hoverState } from "~/store/slices/hover/state";
import { STORAGE } from "~/store/persist/storage";
import {
  TState,
  TStateKey,
  TStateWithPlayerState,
  TStateWithPlayerStateKey,
} from "src/store/types";
import {
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  create,
  Mutate,
  StateCreator,
  StoreApi,
  UseBoundStore,
} from "zustand";
import { playerState } from "~/store/slices/player/state";
import { coreState } from "~/store/slices/core/state";
import { picsState } from "~/store/slices/pics/state";
import { directorState } from "~/store/slices/director/state";
import { TPersistState } from "~/store/persist/types";
import { enableMapSet } from "immer";
import {
  TemporalState,
  temporal,
} from "zundo";
import { OPTIONS_UNDO_REDO } from "~/store/undo-redo";
import { useShallow } from "zustand/react/shallow";
import { key } from "localforage";

enableMapSet();

// 1. immer

type TStateMiddleware = [
  ["zustand/immer", never]
];

export type TStateCreator =
  StateCreator<
    TState,
    [],
    TStateMiddleware,
    TState
  >;
const createImmerState: TStateCreator =
  immer<TState>((...a) => ({
    ...directorState(...a),
    ...coreState(...a),
    ...picsState(...a),
    ...hoverState(...a),
    updateState: a[0],

  }));

// 2. subscribe
type TSubscribeStateMiddleware = [
  [
    "zustand/subscribeWithSelector",
    never
  ],
  ["zustand/immer", never]
];

const createSubscribeState: StateCreator<
  TStateWithPlayerState,
  [],
  TSubscribeStateMiddleware,
  TStateWithPlayerState
> = subscribeWithSelector<
  TStateWithPlayerState,
  [],
  TStateMiddleware
>((...a) => ({
  ...createImmerState(...a),
  ...playerState(...a),
  updatePlayerState: a[0],
}));

// 3. persist
// type TPersistStateMiddleware = [
//   ["zustand/persist", unknown]
// ];

type TPersistStateMiddleware = [
  ["zustand/persist", unknown],
  [
    "zustand/subscribeWithSelector",
    never
  ],
  ["zustand/immer", never]
];

// type TStateMiddleware = [
//   ...TPersistStateMiddleware,
//   ...TSubscribeStateMiddleware,
//   ...TStateMiddleware
// ];

type TPersistStateCreator =
  StateCreator<
    TStateWithPlayerState,
    [],
    TPersistStateMiddleware,
    TStateWithPlayerState
  >;

const createPersistState: TPersistStateCreator =
  persist<
    TStateWithPlayerState,
    [],
    TSubscribeStateMiddleware,
    TPersistState
  >(createSubscribeState, STORAGE);

// 4. devtools
export type TDevtoolsStateMiddleware =
  | [
      ["zustand/devtools", never],
      [
        "zustand/subscribeWithSelector",
        never
      ],
      ["zustand/immer", never]
    ]
  | [
      ["zustand/devtools", never],
      ...TPersistStateMiddleware
    ];

// // type TPrevDevtoolsStateMiddleware =
// // | TSubscribeStateMiddleware
// | TPersistStateMiddleware;
const createDevtoolsState = devtools<
  TStateWithPlayerState,
  [],
  TPersistStateMiddleware
>(createPersistState);

// 4. zundo (undo redo)
export type TZundoStateMiddleware = [
  [
    "temporal",
    StoreApi<
      TemporalState<TStateWithPlayerState>
    >
  ],
  ...TDevtoolsStateMiddleware
];
const createZundoState = temporal<
  TStateWithPlayerState,
  [],
  TDevtoolsStateMiddleware,
  TStateWithPlayerState
>(
  createDevtoolsState,
  OPTIONS_UNDO_REDO
);

type TStore = UseBoundStore<
  Mutate<
    StoreApi<TStateWithPlayerState>,
    TDevtoolsStateMiddleware
  >
>;
export const _useTrillPicsStore: TStore =
  create<TStateWithPlayerState>()<TZundoStateMiddleware>(
    createZundoState
  );

export const useTrillPicsStore = <
  T extends Partial<TStateWithPlayerState>
>(
  resolvePartial: (
    state: TStateWithPlayerState
  ) => T
) => {
  const result = useShallow<
    TStateWithPlayerState,
    T
  >(resolvePartial);
  return _useTrillPicsStore(result);
};

// useTrillPicsStore.subscribe(
//   (state) => state.videoPics,
//   (videoPics: TPics) => {
//     const durationInFrames = videoPics.length
//     useEditorStore.setState({
//       durationInFrames,
//     });
//   },
//   {fireImmediately: true}
// );
