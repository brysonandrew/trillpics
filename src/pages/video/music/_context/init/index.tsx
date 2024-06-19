import {
  createContext,
  FC,
  useContext,
  useMemo,
} from "react";
import { useMotionValue } from "framer-motion";
import {
  TBufferSourceRecord,
  TMusicInitContext,
  TPartialStepsScaleRecord,
  TProgressStepRecord,
} from "~/pages/video/music/_context/init/types";
import { useMusicInitProgress } from "~/pages/video/music/_context/init/progress";

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
  const progress =
    useMusicInitProgress();
  const {
    context,
    master,
    bufferSourceRecord,
    bufferRecord,
    destination,
    recorder,
    gridCellsRecord,
    stepsScaleRecord,
    drumsMaster,
    ...audio
  } = useMemo(() => {
    const context = new AudioContext();

    const drumsMaster = context.createGain();
    drumsMaster.gain.value = 2;
    const master = context.createGain();
    
    master.gain.value =0.5;
    master.connect(context.destination);
    const destination =
      new MediaStreamAudioDestinationNode(
        context
      );
    master.connect(destination);

    const recorder = new MediaRecorder(
      destination.stream
    );
    const chunks: Blob[] = [];

    const arrayBuffer: ArrayBuffer =
      new Float32Array();
    const bufferSourceRecord: TBufferSourceRecord =
      {
        kick: [],
        snare: [],
        hihat: [],
        tom: [],
      };
    const bufferRecord = {};
    const stepsScaleRecord: TPartialStepsScaleRecord =
      {};

    const progressStep: TProgressStepRecord =
      {
        recorder: -1,
        midis: -1,
        beats: -1,
      };

    return {
      loopCount: 0,
      loopsRemainder: 0,
      drumsMaster,
      context,
      master,
      destination,
      recorder,
      chunks,
      arrayBuffer,
      progress,
      bufferSourceRecord,
      bufferRecord,
      gridCellsRecord: {},
      progressStep,
      stepsScaleRecord,
    };
  }, []);

  return (
    <Context.Provider
      value={{
        context,
        master,
        destination,
        recorder,
        audio,
        bufferSourceRecord,
        bufferRecord,
        progress,
        gridCellsRecord,
        stepsScaleRecord,
        drumsMaster
      }}
    >
      {children}
    </Context.Provider>
  );
};
