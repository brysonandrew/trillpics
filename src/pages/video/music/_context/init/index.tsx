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
  const audio = useRefsAudio();
  const grid = useRefsGrid();
  const layout = useRefsLayout();
  const progress = useRefsProgress();
  const schedule = useRefsSchedule();

  // const {
  //   context,
  //   master,
  //   beatsMaster,
  //   midisMaster,
  //   bufferSourceRecord,
  //   bufferRecord,
  //   destination,
  //   recorder,
  //   grid,
  //   schedule.record,
  //   progress,
  //   filter,
  //   delay,
  //   scroll,
  //   ...audio
  // } = useMusicInitProviderRefs();

  return (
    <Context.Provider
      value={{
        audio,
        grid,
        layout,
        progress,
        schedule,
        // context,
        // master,
        // midisMaster,
        // destination,
        // recorder,
        // filter,
        // delay,
        // audio,
        // oscillator,
        // progress,
        // bufferSourceRecord,
        // bufferRecord,
        // grid,
        // schedule.record,
        // updateStepRecord,
        // beatsMaster,
        // scroll,
      }}
    >
      {children}
    </Context.Provider>
  );
};
