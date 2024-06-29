import { MutableRefObject } from "react";
import { MotionValue } from "framer-motion";
import { TScaleKey } from "~/constants/scales";
import { TMidiValues } from "~/hooks/music/midis/types";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/init/constants";
import { useRefsAudio } from "~/pages/video/music/_context/init/refs/audio";
import { useRefsProgress } from "~/pages/video/music/_context/init/refs/progress";
import { useRefsSchedule } from "~/pages/video/music/_context/init/refs/schedule";
import { useRefsLayout } from "~/pages/video/music/_context/init/refs/layout";
import { useRefsGrid } from "~/pages/video/music/_context/init/refs/grid";

export type TRefRecord<
  T extends HTMLElement
> = Record<string, MutableRefObject<T>>;

export type TUpdateStepsRecord = (
  nextSteps: TMidiValues,
  nextScaleKey: TScaleKey
) => void;

type TPageMode =
  (typeof PAGE_SCROLL_MODES)[number];
export type TScroll =
  MutableRefObject<HTMLDivElement | null> & {
    y: MotionValue<number>;
    modes: readonly TPageMode[];
    modeIndex: number;
  };
export type TMusicInitContext = {
  audio: ReturnType<
    typeof useRefsAudio
  >;
  grid: ReturnType<typeof useRefsGrid>;
  layout: ReturnType<
    typeof useRefsLayout
  >;
  progress: ReturnType<
    typeof useRefsProgress
  >;
  schedule: ReturnType<
    typeof useRefsSchedule
  >;
  // updateStepRecord: TUpdateStepsRecord;
  // schedule.record: TStepsRecord;
  // grid.record: TGridCellsRecord;
  // bufferSourceRecord: TBufferSourceRecord;
  // bufferRecord:
  // context: AudioContext;
  // master: GainNode;
  // beats: GainNode;
  // midis: GainNode;
  // oscillator: TOscillator;
  // delay: DelayNode;
  // filter: BiquadFilterNode;
  // progress: TProgressMotionRecord;
  // destination: MediaStreamAudioDestinationNode;
  // recorder: MediaRecorder;
  // scroll: TScroll;
  // audio: {
  //   loopCount: number;
  //   loopsRemainder: number;
  //   progressStep: TProgressStepRecord;
  //   chunks: BlobPart[];
  // };
};
