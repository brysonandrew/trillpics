import {
  createContext,
  FC,
  useContext,
} from "react";
import { TMusicInitContext } from "~/pages/video/music/_context/init/types";
import { useRefsProgress } from "~/pages/video/music/_context/init/refs/progress";
import { useRefsAudio } from "~/pages/video/music/_context/init/refs/audio";
import { useRefsLayout } from "~/pages/video/music/_context/init/refs/layout";
import { useRefsSchedule } from "~/pages/video/music/_context/init/refs/schedule";
import { useRefsGrid } from "~/pages/video/music/_context/init/refs/grid";

const Context =
  createContext<TMusicInitContext>(
    {} as TMusicInitContext
  );
export const useMusicRefs =
  (): TMusicInitContext =>
    useContext<TMusicInitContext>(
      Context
    );
type TProviderProps = {
  children: JSX.Element;
};

export const MusicInitProvider: FC<
  TProviderProps
> = ({ children }) => {
  const schedule = useRefsSchedule();
  const audio = useRefsAudio(schedule.record);
  const grid = useRefsGrid();
  const layout = useRefsLayout();
  const progress = useRefsProgress();

  return (
    <Context.Provider
      value={{
        audio,
        grid,
        layout,
        progress,
        schedule,
      }}
    >
      {children}
    </Context.Provider>
  );
};
