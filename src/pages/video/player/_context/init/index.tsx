import {
  createContext,
  useContext,
  FC,
  useState,
} from "react";
import { useLocalStorage } from "@brysonandrew/hooks-dom";
import { DEFAULT_FPS } from "~/constants/remotion";
import {
  TInitVideoState,
  TPartialInitVideoState,
  TPlayerInitContext,
  TPlayerInitContextProviderProps,
} from "~/pages/video/player/_context/init/types";
import { TPlayerInstance } from "~/pages/video/player/_context/ready/types";

export const INIT_LOCAL_STORAGE_STATE =
  {
    fps: DEFAULT_FPS,
  };

const InitContext = createContext({
  ...INIT_LOCAL_STORAGE_STATE,
} as TPlayerInitContext);

export const useContextPlayer_Init =
  () => useContext(InitContext);

export const Player_InitContextProvider: FC<
  TPlayerInitContextProviderProps
> = ({ children }) => {
  const [
    playerInstance,
    setPlayerInstance,
  ] = useState<TPlayerInstance>(null);
  const [
    initVideoState,
    setVideoState,
  ] = useLocalStorage<TInitVideoState>(
    "INIT_VIDEO_STATE",
    INIT_LOCAL_STORAGE_STATE
  );
  const updateState = (
    partial: TPartialInitVideoState
  ) => {
    setVideoState((state) => ({
      ...state,
      partial,
    }));
  };

  return (
    <InitContext.Provider
      value={{
        playerInstance,
        updatePlayerInstance:
          setPlayerInstance,
        updateState,
        ...initVideoState,
      }}
    >
      {children(playerInstance)}
    </InitContext.Provider>
  );
};
