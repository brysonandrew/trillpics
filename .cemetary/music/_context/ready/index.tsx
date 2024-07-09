import {
  useContext as useReactContext,
  createContext,
} from "react";
import type { FC } from "react";
import { useBeatsLookup } from "~/hooks/music/beats/lookup";
import { useMidisLookup } from "~/hooks/music/midis/lookup";
import { TChildren } from "@brysonandrew/config-types";
import { useLoadWorklets } from "~/pages/video/music/_context/load/worklets";

type TContext = {
  beats: ReturnType<
    typeof useBeatsLookup
  >;
  midis: ReturnType<
    typeof useMidisLookup
  >;
};

const Context = createContext<TContext>(
  {} as TContext
);

export const useMusicPlay =
  (): TContext =>
    useReactContext<TContext>(Context);

type TProps = {
  children: TChildren;
};
export const MusicPlayProvider: FC<
  TProps
> = ({ children }) => {
  const beats = useBeatsLookup();
  const midis = useMidisLookup();
  
  const value = {
    midis,
    beats,
  } as const;
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
