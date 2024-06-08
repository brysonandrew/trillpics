import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDownload } from "~/shell/global/sound/hooks/useDownload";
import { TSoundContext } from "~/shell/global/sound/types";

const Context =
  createContext<TSoundContext>(
    {} as TSoundContext
  );
export const useSoundContext =
  (): TSoundContext =>
    useContext<TSoundContext>(Context);
type TProviderProps = {
  children: JSX.Element;
};
export const ShellSoundProvider: FC<
  TProviderProps
> = ({ children }) => {
  const [audioUrl, setAudioUrl] =
    useState<string | null>(null);
  const { context, master, ...sound } =
    useMemo(() => {
      const context =
        new AudioContext();
      const master =
        context.createGain();
      master.gain.value = 6;
      master.connect(
        context.destination
      );
      const destination =
        new MediaStreamAudioDestinationNode(
          context
        );
      master.connect(destination);
      const recorder =
        new MediaRecorder(
          destination.stream
        );
      const chunks: Blob[] = [];

      const arrayBuffer: ArrayBuffer =
        new Float32Array();

      return {
        isRecording: false,
        context,
        master,
        destination,
        recorder,
        chunks,
        arrayBuffer,
      };
    }, []);

  const start = () => {
    sound.recorder.ondataavailable = (
      event: BlobEvent
    ) => {
      console.log(
        "sound.recorder.ondataavailable "
      );
      console.dir(event);
      if (event.data?.size > 0) {
        sound.chunks = [
          ...sound.chunks,
          event.data,
        ];
      }
    };
    sound.recorder.start();
    sound.isRecording = true;
  };

  


  const stop = () => {
    sound.recorder.stop();
    sound.isRecording = false;
  };

  return (
    <Context.Provider
      value={{
        start,
        stop,
        context,
        master,
        sound,
        audioUrl,
      }}
    >
      {children}
    </Context.Provider>
  );
};
