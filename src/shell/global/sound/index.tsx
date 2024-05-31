import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
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
  const {context,master, ...sound} = useMemo(() => {
    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 10;
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

    return {
      isRecording:false,
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
      if (
        event.data &&
        event.data.size > 0
      ) {
        sound.chunks = [
          ...sound.chunks,
          event.data,
        ];
      }
    };
    sound.recorder.start();
    sound.isRecording  = true;
  };

  const createSource = () => {
    const options: BlobPropertyBag = {
      type: "audio/ogg; codecs=opus",
    };
    const blob = new Blob(
      sound.chunks,
      options
    );
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      const arrayBuffer =
        fileReader.result;
      if (
        arrayBuffer &&
        typeof arrayBuffer !== "string"
      ) {
        sound.arrayBuffer = arrayBuffer;
      }
    };

    fileReader.readAsArrayBuffer(blob);

    sound.chunks = [];
  };

  const download = useDownload();

  useEffect(() => {
    sound.recorder.onstop = (
      event: Event
    ) => {
      console.dir(event)
      download(sound)
      console.log(
        `Recorder stopped: Recorded chunks: ${sound.chunks.length}`
      );
    };
  },[])

  const stop = () => {
    //createSource() // makes array buffer
    sound.recorder.stop();
    sound.isRecording  = false;
  };

  return (
    <Context.Provider
      value={{ start, stop, context,master, sound }}
    >
      {children}
    </Context.Provider>
  );
};
