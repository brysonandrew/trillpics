import { MotionValue } from "framer-motion";
import { TBeatsSequenceKey } from "~/hooks/sound/beats/types";
export type TSavedAudio = {
  src: string;
  seconds: number;
};
export type TSoundContext = {
  bufferSourceRecord: Partial<
    Record<
      TBeatsSequenceKey,
      null | AudioBufferSourceNode
    >
  >;
  bpm: number;
  updateBpm(next: number): void;
  audio: TSavedAudio | null;
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
