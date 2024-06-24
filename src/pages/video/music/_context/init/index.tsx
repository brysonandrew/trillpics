import {
  createContext,
  FC,
  MutableRefObject,
  useContext,
} from "react";
import {
  TMusicInitContext,
  TUpdateStepsRecord,
} from "~/pages/video/music/_context/init/types";
import { useMusicInitProviderRefs } from "~/pages/video/music/_context/init/refs";
import { useOscillator } from "~/pages/video/music/_context/init/oscillator";
import { TMidiValues } from "~/hooks/music/midis/types";
import { TScaleKey } from "~/constants/scales";

const Context =
  createContext<TMusicInitContext>(
    {} as TMusicInitContext
  );
export const useContextMusicInit =
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
    stepsRecord,
    progress,
    filter,
    delay,
    scroll,
    ...audio
  } = useMusicInitProviderRefs();
  const oscillator =
    useOscillator(context);
  const updateStepRecord: TUpdateStepsRecord =
    (
      nextSteps: TMidiValues,
      nextScaleKey: TScaleKey
    ) => {
      stepsRecord.steps = nextSteps;
      stepsRecord.scale.key =
        nextScaleKey;
    };

  return (
    <Context.Provider
      value={{
        context,
        master,
        midisMaster,
        destination,
        recorder,
        filter,
        delay,
        audio,
        oscillator,
        progress,
        bufferSourceRecord,
        bufferRecord,
        gridCellsRecord,
        stepsRecord,
        updateStepRecord,
        beatsMaster,
        scroll,
      }}
    >
      {children}
    </Context.Provider>
  );
};
