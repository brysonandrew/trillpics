import { MotionValue } from "framer-motion";
import { TScaleKey } from "~/constants/scales";
import { TBeatsStepsKey } from "~/hooks/music/beats/types";
import { TMidiValues } from "~/hooks/music/midis/types";
import { TMusicKey } from "~/store/state/music/types";
export type TBaseGridCell =
  null | HTMLDivElement;
export type TGridCell = TBaseGridCell;

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
export type TBufferSourceRecord =
  Record<
    TBeatsStepsKey,
    {
      timeout: ReturnType<
        typeof window.setTimeout
      >;
      source: AudioBufferSourceNode;
    }[]
  >;
export type TMusicInitContext = {
  stepsScaleRecord: TPartialStepsScaleRecord;
  gridCellsRecord: TGridCellsRecord;
  bufferSourceRecord: TBufferSourceRecord;
  bufferRecord: Partial<
    Record<
      TBeatsStepsKey,
      null | AudioBuffer
    >
  >;
  context: AudioContext;
  master: GainNode;
  drumsMaster: GainNode;
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
