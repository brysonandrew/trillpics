import {
  useContext as useReactContext,
  createContext,
} from "react";
import type { FC } from "react";
import { useSoundBeatsLookup } from "~/hooks/music/beats/lookup";
import { useSoundMidisLookup } from "~/hooks/music/midis/lookup";
import { TChildren } from "@brysonandrew/config-types";
import { useBeatsLoad } from "~/hooks/music/beats/load";

type TContext = {
  beats: ReturnType<
    typeof useSoundBeatsLookup
  >;
  midis: ReturnType<
    typeof useSoundMidisLookup
  >;
};

const Context = createContext<TContext>(
  {} as TContext
);

export const useMusicReadyContext =
  (): TContext =>
    useReactContext<TContext>(Context);

type TProps = {
  children: TChildren;
};
export const MusicReadyProvider: FC<
  TProps
> = ({ children }) => {
  const beats = useSoundBeatsLookup();
  const midis = useSoundMidisLookup();
  useBeatsLoad()
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
