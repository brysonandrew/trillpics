import { createContext, FC, useContext } from "react";
import { TMusicInitContext } from "~/pages/video/music/_context/init/types";
import { useMusicInitProviderRefs } from "~/pages/video/music/_context/init/refs";

const Context =
  createContext<TMusicInitContext>(
    {} as TMusicInitContext
  );
export const useMusicInitContext =
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
  const {
    context,
    master,
    beatsMaster,
    midisMaster,
    bufferSourceRecord,
    bufferRecord,
    destination,
    recorder,
    gridCellsRecord,
    stepsScaleRecord,
    progress,
    ...audio
  } = useMusicInitProviderRefs();
  return (
    <Context.Provider
      value={{
        context,
        master,
        midisMaster,
        destination,
        recorder,
        audio,
        progress,
        bufferSourceRecord,
        bufferRecord,
        gridCellsRecord,
        stepsScaleRecord,
        beatsMaster,
      }}
    >
      {children}
    </Context.Provider>
  );
};
