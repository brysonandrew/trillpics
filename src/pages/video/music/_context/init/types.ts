import { MotionValue } from "framer-motion";
import { TScaleKey } from "~/constants/scales";
import { TBeatsStepsKey } from "~/hooks/music/beats/types";
import { TMidiValues } from "~/hooks/music/midis/types";
import { TMusicKey } from "~/store/state/music/types";

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
  TMidiValues
>;
export type TPartialStepsScaleRecord =
  Partial<TStepsScaleRecord>;
export type TProgressKey =
  | TMusicKey
  | "recorder";

export type TProgressStepRecord =
  Record<TProgressKey, number>;

export type TProgressMotionRecord =
  Record<
    TProgressKey,
    MotionValue<number>
  >;
export type TMusicInitContext = {
  stepsScaleRecord: TPartialStepsScaleRecord;
  gridCellsRecord: TGridCellsRecord;
  bufferSourceRecord: Partial<
    Record<
      TBeatsStepsKey,
      null | AudioBufferSourceNode
    >
  >;
  bufferRecord: Partial<
    Record<
      TBeatsStepsKey,
      null | AudioBuffer
    >
  >;
  context: AudioContext;
  master: GainNode;
  progress: TProgressMotionRecord;
  destination: MediaStreamAudioDestinationNode;
  recorder: MediaRecorder;
  audio: {
    loopCount: number;
    loopsRemainder: number;
    progressStep: TProgressStepRecord;
    chunks: BlobPart[];
  };
};
