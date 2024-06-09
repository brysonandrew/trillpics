import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMotionValue } from "framer-motion";
import { useDownload } from "~/shell/global/sound/hooks/useDownload";
import { TSoundContext } from "~/shell/global/sound/types";
import { isString } from "~/utils/validation/is/string";

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
  const isAudioUrl = isString(audioUrl);

  const saveProgress =
    useMotionValue(0);

  const { context, master, ...sound } =
    useMemo(() => {
      const context =
        new AudioContext();
      const master =
        context.createGain();
      master.gain.value = 0.1;
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
        saveProgress,
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
  useEffect(() => {
    sound.recorder.onstop = (
      event: Event
    ) => {
      console.log(
        "sound.recorder.onstop "
      );
      console.dir(event);
      console.log(sound.chunks);
      const audioBlob = new Blob(
        sound.chunks,
        {
          type: "audio/webm",
        }
      );
      // set({ audioBlob });

      if (isAudioUrl) {
        window.URL.revokeObjectURL(
          audioUrl
        );
      }
      const url =
        window.URL.createObjectURL(
          audioBlob
        );

      setAudioUrl(url);

      // download(url);

      console.log(
        `Recorder stopped: Recorded chunks: ${sound.chunks.length}`
      );
    };
  }, []);
  return (
    <Context.Provider
      value={{
        start,
        stop,
        context,
        master,
        sound,
        saveProgress,
        audioUrl,
      }}
    >
      {children}
    </Context.Provider>
  );
};
