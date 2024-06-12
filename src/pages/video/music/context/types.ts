import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from "react";
import {
  TSynthOptions,
  TMultiOptions,
} from "react-synthwave";
import { useSoundBeatsLookup } from "~/hooks/sound/beats/lookup";
import { useSoundMidisLookup } from "~/hooks/sound/midis/lookup";
import { TMusicKey } from "~/store/state/music/types";

export type TContext =
  TMusicState & {
    dispatch: TDispatch;
    beats: ReturnType<
    typeof useSoundBeatsLookup
  >;
  midis: ReturnType<
    typeof useSoundMidisLookup
  >;
  };

export type TAction =
  | {
      type: "toggle-ready";
      value: boolean;
    }
  | {
      type: "playing";
      value: TMusicKey|null;
    }
  | {
      type: "update-options";
      value: Partial<TSynthOptions>;
    }
  | {
      type: "update-multi";
      value: Partial<TMultiOptions>;
    };

export type TMusicState = {
  playKey:TMusicKey|null;
  options: TSynthOptions;
  multi: TMultiOptions;
};

export type TActionType = null;
export type TActionValue = any;

export type TKeyValuePair = [
  key: TActionType,
  value: TActionValue
];

export type TDispatch =
  Dispatch<TAction>;
export type TReducer = Reducer<
  TMusicState,
  TAction
>;
export type TReducerState =
  ReducerState<TReducer>;
export type TReducerAction =
  ReducerAction<TReducer>;
