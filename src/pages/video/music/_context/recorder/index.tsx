import {
  useContext as useReactContext,
  createContext,
} from "react";
import type { FC } from "react";
import { useMusicRecorder } from "~/pages/video/music/_context/hooks/recorder";
import { TChildren } from "@brysonandrew/config-types";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

type TContext = ReturnType<
  typeof useMusicRecorder
>;

const Context = createContext<TContext>(
  {} as TContext
);

export const useMusicRecorderContext =
  (): TContext =>
    useReactContext<TContext>(Context);

type TProps = {
  children: TChildren;
};
export const MusicRecorderProvider: FC<
  TProps
> = ({ children }) => {
  const recorder = useMusicRecorder();

  return (
    <Context.Provider value={recorder}>
      <>{children}</>
    </Context.Provider>
  );
};
