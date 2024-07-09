import {
  createContext,
  FC,
  useContext,
} from "react";
import { TMusicRefsContext } from "~/pages/video/music/_context/refs/types";
import { useRefsProgress } from "~/pages/video/music/_context/refs/progress";
import { useRefsAudio } from "~/pages/video/music/_context/refs/audio";
import { useRefsLayout } from "~/pages/video/music/_context/refs/layout";
import { useRefsSchedule } from "~/pages/video/music/_context/refs/schedule";
import { useRefsGrid } from "~/pages/video/music/_context/refs/grid";

const Context =
  createContext<TMusicRefsContext>(
    {} as TMusicRefsContext
  );
export const useMusicRefs =
  (): TMusicRefsContext =>
    useContext<TMusicRefsContext>(
      Context
    );
type TProviderProps = {
  children: JSX.Element;
};

export const MusicRefsProvider: FC<
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
