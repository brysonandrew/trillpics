import { MotionValue } from "framer-motion";
import { TBeatsSequenceKey } from "~/hooks/music/beats/types";

export type TMusicInitContext = {
  bufferSourceRecord: Partial<
    Record<
      TBeatsSequenceKey,
      null | AudioBufferSourceNode
    >
  >;
  context: AudioContext;
  master: GainNode;
  saveProgress: MotionValue<number>;
  destination: MediaStreamAudioDestinationNode;
  recorder: MediaRecorder;
  audio: {
    chunks: BlobPart[];
  };
};
