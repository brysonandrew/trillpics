import { MutableRefObject } from "react";
import { TScaleKey } from "~/constants/scales";
import { TMidiValues } from "~/hooks/music/midis/types";
import { useRefsAudio } from "~/pages/video/music/_context/refs/audio";
import { useRefsProgress } from "~/pages/video/music/_context/refs/progress";
import { useRefsSchedule } from "~/pages/video/music/_context/refs/schedule";
import { useRefsLayout } from "~/pages/video/music/_context/refs/layout";
import { useRefsGrid } from "~/pages/video/music/_context/refs/grid";

export type TAudioNodeId = string;

export type TUpdateStepsRecord = (
  nextSteps: TMidiValues,
  nextScaleKey: TScaleKey
) => void;

export type TMusicRefsContext = {
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
};
