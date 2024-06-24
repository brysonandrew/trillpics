import { MotionValue } from "framer-motion";
import { TScaleKey } from "~/constants/scales";
import { TBeatsPresetRecord, TBeatsStepsKey } from "~/hooks/music/beats/types";
import { TMidiValues } from "~/hooks/music/midis/types";
import { TMusicKey } from "~/store/state/music/types";
import { TOscillator } from "~/pages/video/music/_context/init/oscillator/types";
import { TSequenceOptions } from "~/pages/video/music/synth/sequence/types";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/init/constants";
import { TScaleOptions, TScalePattern } from "~/pages/video/music/synth/scale/types";
import { TSynthOptions } from "react-synthwave";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";

export type TBaseGridCell =
  null | HTMLDivElement;
export type TGridCell = TBaseGridCell;

export type TGridCells = TGridCell[];
export type TGridRows = TGridCells[];
export type TGridCellsRecord = Record<
  string,
  TGridRows
>;
type TScaleLookup = Record<
  TScaleKey,
  TMidiValues
>;
export type TPartialScaleLookup =
  Partial<TScaleLookup>;

export type TStepsRecord = {
  steps: TMidiValues
  scale: TScaleOptions
  sequence: TSequenceOptions;
  synth: TSynthOptions
  presets:typeof BEATS_PRESETS
  presetKey: TBeatsPresetsKey
};

export type TProgressKey =
  | TMusicKey
  | "track";

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
export type TUpdateStepsRecord = (
  nextSteps: TMidiValues,
  nextScaleKey: TScaleKey
) => void;

type TPageMode =
  (typeof PAGE_SCROLL_MODES)[number];
export type TScroll = {
  current: HTMLDivElement | null;
  y: MotionValue<number>;
  modes: readonly TPageMode[];
  modeIndex: number;
};
export type TMusicInitContext = {
  updateStepRecord: TUpdateStepsRecord;
  stepsRecord: TStepsRecord;
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
  beatsMaster: GainNode;
  midisMaster: GainNode;
  oscillator: TOscillator;
  delay: DelayNode;
  filter: BiquadFilterNode;
  progress: TProgressMotionRecord;
  destination: MediaStreamAudioDestinationNode;
  recorder: MediaRecorder;
  scroll: TScroll;
  audio: {
    loopCount: number;
    loopsRemainder: number;
    progressStep: TProgressStepRecord;
    chunks: BlobPart[];
  };
};
