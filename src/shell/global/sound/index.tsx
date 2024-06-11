import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMotionValue } from "framer-motion";
import {
  TSavedAudio,
  TSoundContext,
} from "~/shell/global/sound/types";
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
  const [audio, setAudio] =
    useState<TSavedAudio | null>(null);
  const [bpm, setBpm] =
    useState<number>(80);
  const isAudio = isString(audio);

  const saveProgress =
    useMotionValue(0);

  const { context, master, ...sound } =
    useMemo(() => {
      const context =
        new AudioContext();
      const master =
        context.createGain();
      master.gain.value = 4;
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

      if (isAudio) {
        window.URL.revokeObjectURL(
          audio
        );
      }
      const url =
        window.URL.createObjectURL(
          audioBlob
        );

      setAudio({
        src: url,
        seconds: (bpm / 60) * 8,
      });

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
        audio,
        bpm,
        updateBpm: setBpm,
      }}
    >
      {children}
    </Context.Provider>
  );
};
