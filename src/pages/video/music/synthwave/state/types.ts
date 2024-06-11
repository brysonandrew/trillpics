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

export type TContext =
  TSynthwaveState & {
    dispatch: TDispatch;
    lookup: {
      beats: ReturnType<
        typeof useSoundBeatsLookup
      >;
      midis: ReturnType<
        typeof useSoundMidisLookup
      >;
    };
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

export type TSynthwaveState = {
  isReady: boolean;
  isPlaying: boolean;
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
  TSynthwaveState,
  TAction
>;
export type TReducerState =
  ReducerState<TReducer>;
export type TReducerAction =
  ReducerAction<TReducer>;
