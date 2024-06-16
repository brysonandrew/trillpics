import {
  useContext as useReactContext,
  createContext,
} from "react";
import type { FC } from "react";
import { useBeatsLookup } from "~/hooks/music/beats/lookup";
import { useMidisLookup } from "~/hooks/music/midis/lookup";
import { TChildren } from "@brysonandrew/config-types";
import { useBeatsLoad } from "~/hooks/music/beats/load";

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

export const useMusicReadyContext =
  (): TContext =>
    useReactContext<TContext>(Context);

type TProps = {
  children: TChildren;
};
export const MusicReadyProvider: FC<
  TProps
> = ({ children }) => {
  const beats = useBeatsLookup();
  const midis = useMidisLookup();
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
