import {
  useReducer,
  useContext as useReactContext,
  createContext,
} from "react";
import type { FC } from "react";
import { useLocalStorage } from "~/hooks/logic/storage/useLocalStorage";
import { useSoundBeatsLookup } from "~/hooks/sound/beats/lookup";
import { useSoundMidisLookup } from "~/hooks/sound/midis/lookup";
import type {
  TReducer,
  TMusicState,
  TAction,
  TContext,
} from "./types";
import { reducer } from "./reducer";
import {
  STATE,
  _SYNTH_WAVE_STATE_STORAGE_KEY,
} from "./constants";

export const Context =
  createContext<TContext>({
    dispatch: (_: TAction) => null,
  } as any);

export const useMusicContext =
  (): TContext =>
    useReactContext<TContext>(Context);

type TMusicProviderProps = {
  children: JSX.Element | JSX.Element[];
};
export const MusicProvider: FC<
  TMusicProviderProps
> = ({ children }) => {
  const [savedState, setSavedState] =
    useLocalStorage<TMusicState>(
      _SYNTH_WAVE_STATE_STORAGE_KEY,
      STATE
    );
  const beats = useSoundBeatsLookup();
  const midis = useSoundMidisLookup();
  const [state, dispatch] = useReducer<
    TReducer,
    TMusicState
  >(
    (...args) => {
      const nextState = reducer(
        ...args
      );

      setSavedState({
        ...STATE,
        ...nextState,
        playKey: null,
      });

      return nextState;
    },
    STATE,
    (state) => ({
      ...state,
      ...savedState,
    })
  );

  return (
    <Context.Provider
      value={{
        dispatch,
        ...{ midis, beats },

        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
