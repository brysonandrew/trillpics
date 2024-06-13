import { createContext, FC, useContext, useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { TMusicInitContext } from "~/pages/video/music/_context/init/types";

const Context =
  createContext<TMusicInitContext>(
    {} as TMusicInitContext
  );
export const useMusicInitContext =
  (): TMusicInitContext =>
    useContext<TMusicInitContext>(Context);
type TProviderProps = {
  children: JSX.Element;
};

export const MusicInitProvider: FC<
  TProviderProps
> = ({ children }) => {

    const saveProgress =
    useMotionValue(0);

  const {
    context,
    master,
    bufferSourceRecord,
    destination,
    recorder,
    ...audio
  } = useMemo(() => {
    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 4;
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
    const bufferSourceRecord = {};
    return {
      isRecording: false,
      context,
      master,
      destination,
      recorder,
      chunks,
      arrayBuffer,
      saveProgress,
      bufferSourceRecord,
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
        saveProgress,
      }}
    >
      {children}
    </Context.Provider>
  );
};
