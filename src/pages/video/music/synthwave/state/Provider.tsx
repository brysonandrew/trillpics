import { useReducer } from "react";
import type { FC } from "react";
import { useLocalStorage } from "@logic/storage/useLocalStorage";
import type {
  TReducer,
  TSynthwaveState,
} from "./types";
import { reducer } from "./reducer";
import { Context } from "./Context";
import {
  STATE,
  _SYNTH_WAVE_STATE_STORAGE_KEY,
} from "./constants";
import { useSoundBeatsLookup } from "~/hooks/sound/beats/lookup";
import { useSoundMidisLookup } from "~/hooks/sound/midis/lookup";

type TSynthwaveProviderProps = {
  children: JSX.Element | JSX.Element[];
};
export const SynthwaveProvider: FC<
  TSynthwaveProviderProps
> = ({ children }) => {
  const [savedState, setSavedState] =
    useLocalStorage<TSynthwaveState>(
      _SYNTH_WAVE_STATE_STORAGE_KEY,
      STATE
    );
    const beats = useSoundBeatsLookup();
    const midis = useSoundMidisLookup();
  const [state, dispatch] = useReducer<
    TReducer,
    TSynthwaveState
  >(
    (...args) => {
      const nextState = reducer(
        ...args
      );

      setSavedState({
        ...STATE,
        ...nextState,
        isPlaying: false,
        isReady: false,
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
      lookup: { midis, beats },

        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};
