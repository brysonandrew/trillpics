import { createContext, FC, MutableRefObject, useContext } from "react";
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
  scrollRef: MutableRefObject<HTMLDivElement|null>
  children: JSX.Element;
};

export const MusicInitProvider: FC<
  TProviderProps
> = ({ children,scrollRef }) => {
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
        scrollRef
      }}
    >
      {children}
    </Context.Provider>
  );
};
