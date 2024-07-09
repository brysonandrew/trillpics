import {
  useContext as useReactContext,
  createContext,
  useEffect,
} from "react";
import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { useLoadWorklets } from "~/pages/video/music/_context/load/worklets";
import { trpc } from "~/utils/trpc";

type TContext = {
  load: {
    worklets: ReturnType<
      typeof useLoadWorklets
    >;
  };
};

const Context = createContext<TContext>(
  {} as TContext
);

export const useMusicLoad =
  (): TContext =>
    useReactContext<TContext>(Context);

type TProps = {
  children: TChildren;
};
export const MusicLoadProvider: FC<
  TProps
> = ({ children }) => {
  const worklets = useLoadWorklets();
  const {
    isError,
    isLoading,
    isPaused,
    isSuccess,
    data,
  } = trpc.songs.useQuery({
    onSuccess: async (f: any) => {
      console.log(f);
    },
  });
  console.log(data);
  useEffect(() => {
    worklets();
  }, []);
  return (
    <Context.Provider
      value={{ load: { worklets } }}
    >
      {children}
    </Context.Provider>
  );
};
