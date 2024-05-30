import {
  createContext,
  useContext,
  FC,
  useState,
} from "react";
import { usePlayerListeners } from "~/pages/video/player/_context/ready/hooks/use-player-listeners";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";
import {
  playerSeekHandlers,
  TPlayerSeekHandlers,
} from "~/pages/video/player/_context/ready/seek";
import {
  TPartialVideoState,
  TPlayerReadyContext,
  TPlayerReadyContextProviderProps,
  TVideoState,
} from "~/pages/video/player/_context/ready/types";

const ReadyContext = createContext(
  {} as TPlayerReadyContext
);

export const useContextPlayer_Ready =
  () => useContext(ReadyContext);

export const Player_ReadyContextProvider: FC<
  TPlayerReadyContextProviderProps
> = ({ children, playerInstance }) => {
  const { fps } =
    useContextPlayer_Init();
  const [videoState, setVideoState] =
    useState<TVideoState>({
      isStarted: false,
      isMuted: false,
      isPlaying: false,
    });
  const updateState = (
    partial: TPartialVideoState
  ) => {
    setVideoState((prev) => ({
      ...prev,
      ...partial,
    }));
  };
  usePlayerListeners(
    playerInstance,
    videoState,
    updateState
  );
  const seekHandlers: TPlayerSeekHandlers =
    playerSeekHandlers(
      playerInstance,
      fps
    );
  return (
    <ReadyContext.Provider
      value={{
        playerInstance,
        seek: seekHandlers,
        updateState,
        ...videoState,
      }}
    >
      {children}
    </ReadyContext.Provider>
  );
};
