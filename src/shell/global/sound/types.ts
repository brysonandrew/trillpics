export type TSoundContext = {
  context: AudioContext;
  master: GainNode;
  sound: {
    isRecording: boolean;
    recorder: MediaRecorder;
    chunks: BlobPart[];
    destination: MediaStreamAudioDestinationNode;
  };
  start(): void;
  stop(): void;
};
