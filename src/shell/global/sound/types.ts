import { MotionValue } from "framer-motion";

export type TSoundContext = {
  audioSrc: string | null;
  context: AudioContext;
  master: GainNode;
  saveProgress: MotionValue<number>;
  sound: {
    isRecording: boolean;
    recorder: MediaRecorder;
    chunks: BlobPart[];
    destination: MediaStreamAudioDestinationNode;
  };
  start(): void;
  stop(): void;
};
