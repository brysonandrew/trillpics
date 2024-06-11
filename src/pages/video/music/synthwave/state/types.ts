import { TSynthOptions, TMultiOptions } from "react-synthwave"
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from "react";

export type TContext = TState & {
  context: AudioContext;
  master: GainNode;
  dispatch: TDispatch;
};

export type TAction =
  | {
      type: "toggle-ready";
      value: boolean;
    }
  | {
      type: "toggle-playing";
      value: boolean;
    }
  | {
      type: "update-options";
      value: Partial<TSynthOptions>;
    }
  | {
      type: "update-multi";
      value: Partial<TMultiOptions>;
    };

export type TState = {
  isReady: boolean;
  isPlaying: boolean;
  options: TSynthOptions;
  multi: TMultiOptions;
};

export type TActionType = null;
export type TActionValue = any;

export type TKeyValuePair = [
  key: TActionType,
  value: TActionValue,
];

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;
