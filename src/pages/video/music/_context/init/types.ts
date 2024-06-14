import { MotionValue } from "framer-motion";
import { TScaleKey } from "~/constants/scales";
import { TBeatsSequenceKey } from "~/hooks/music/beats/types";
import { TMidis } from "~/hooks/music/midis/types";

export type TGridCell =
  null | HTMLDivElement;
export type TGridCells = TGridCell[];
export type TGridRows = TGridCells[];
export type TGridCellsRecord = Record<
  string,
  TGridRows
>;
export type TStepsScaleRecord = Record<
  TScaleKey,
  TMidis
>;
export type TPartialStepsScaleRecord =
  Partial<TStepsScaleRecord>;

export type TMusicInitContext = {
  stepsScaleRecord: TPartialStepsScaleRecord;
  gridCellsRecord: TGridCellsRecord;
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
    currentStep: number;
    chunks: BlobPart[];
  };
};
