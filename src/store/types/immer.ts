import { Draft } from "immer";
type SkipTwo<T> = T extends {
  length: 0;
}
  ? []
  : T extends {
      length: 1;
    }
  ? []
  : T extends {
      length: 0 | 1;
    }
  ? []
  : T extends [
      unknown,
      unknown,
      ...infer A
    ]
  ? A
  : T extends [
      unknown,
      unknown?,
      ...infer A
    ]
  ? A
  : T extends [
      unknown?,
      unknown?,
      ...infer A
    ]
  ? A
  : never;
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
            | undefined,
          ...a: SkipTwo<A>
        ): Sr;
      }
    : never
  : never;
type Write<T, U> = Omit<T, keyof U> & U;

type WithImmer<S> = Write<
  S,
  TStoreImmer<S>
>;

// type WithDevtools<S> = Write<S, StoreDevtools<S>>;
// type StoreDevtools<S> = S extends {
//     setState: (...a: infer Sa) => infer Sr;
// } ? {
//     setState<A extends string | {
//         type: string;
//     }>(...a: [...a: TakeTwo<Sa>, action?: A]): Sr;
// } : never;

// WithImmer<Write<StoreApi<TState>, typeof subscribeWithSelector<TState>>>
// export type TStoreState = UseBoundStore<WithImmer<Write<Write<WithDevtools<Write<StoreApi<TState>, { temporal: StoreApi<TTemporalState>; }>>, StorePersist<TState, TPersistPartializedState>>, StoreSubscribeWithSelector<...>>>>
// export type TSet = Parameters<TTemporalStateResult>[0];
// export type TGet = () => TState;
// export type TStateCreator<
//   T extends object
// > = StateCreator<TState, [], [], T>;
// | TState
// | TPartialState;
// [
//   TSet,
//   TGet,
//   TStoreState
// ];
// type TImmerState = typeof immerState;
// type TImmerStateParameters =
//   Parameters<TImmerState>;
// WithImmer<TState>;
// [
//   TSet,
//   TGet,
//   TStoreImmer<TState>
// ];

//TStoreImmer<TState>

// (
//   nextStateOrUpdater:
//     | TStoreState
//     | TStoreUpdater,
//   replace?: boolean | undefined
// ) => void;
// TImmerStateParameters[0];
//UseBoundStore<
//   Mutate<StoreApi<TState>, TMiddlewares>
// >;

// TImmerStateParameters[1];
// export type TStoreState =TStoreImmer<TState>
// TImmerStateParameters[2];
//StoreApi<TState>;
