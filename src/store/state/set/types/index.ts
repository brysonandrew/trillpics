import { Draft } from "immer";
import { TState } from "~/store/types";

export type TStoreImmer<S> = S extends {
  getState: () => infer T;
  setState: infer SetState;
}
  ? SetState extends (
      ...a: infer A
    ) => infer Sr
    ? {
        setState(
          nextStateOrUpdater:
            | T
            | Partial<T>
            | ((
                state: Draft<T>
              ) => void),
          shouldReplace?:
            | boolean
            | undefined
          // ...a: SkipTwo<A>
        ): Sr;
      }
    : never
  : never;

type TUpdater = (
  state: TState
) => TState | Partial<TState>;
type TDraftUpdater = (
  state: Draft<TState>
) => void;
export type TSet = (
  partial:
    | TState
    | Partial<TState>
    | TUpdater
    | TDraftUpdater,
  replace?: boolean | undefined
) => void;
//Parameters<TStateWithMiddleware>[0]
// export type TSet =
//   | ((
//       nextStateOrUpdater:
//         | TState
//         | Partial<TState>
//         | ((
//             state: Draft<TState>
//           ) => void)
//         // | ((state: TState) => void)
//         | ((
//             state: TState
//           ) =>
//             | TState
//             | Partial<TState>
//             | void),
//       shouldReplace?:
//         | boolean
//         | undefined
//     ) => TState)
//   | Parameters<TStateWithMiddleware>[0];

//TStoreImmer<TStateWithMiddleware>
// | ((draft: TState) => void)
// | TState
// | TStateCreatorParameters[0];

export type TSetState = {
  set: TSet;
};
