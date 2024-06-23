import {
  useContext as useReactContext,
  createContext,
} from "react";
import type { FC } from "react";
import { useBeatsLookup } from "~/hooks/music/beats/lookup";
import { useNodesLookup } from "~/hooks/music/midis/lookup";
import { TChildren } from "@brysonandrew/config-types";
import { useBeatsLoad } from "~/hooks/music/beats/load";
import { useOscillator } from "~/pages/video/music/_context/init/oscillator";
import { TOscillator } from "~/pages/video/music/_context/init/oscillator/types";

type TContext = {
  beats: ReturnType<
    typeof useBeatsLookup
  >;
  midis: ReturnType<
    typeof useNodesLookup
  >;
};

const Context = createContext<TContext>(
  {} as TContext
);

export const useContextMusicReady =
  (): TContext =>
    useReactContext<TContext>(Context);

type TProps = {
  children: TChildren;
};
export const MusicReadyProvider: FC<
  TProps
> = ({ children }) => {
  const beats = useBeatsLookup();
  const midis = useNodesLookup();
  useBeatsLoad();
  return (
    <Context.Provider
      value={{
        midis,
        beats,
      }}
    >
      {children}
    </Context.Provider>
  );
};
