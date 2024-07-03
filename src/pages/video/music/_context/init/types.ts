import { MutableRefObject } from "react";
import { TScaleKey } from "~/constants/scales";
import { TMidiValues } from "~/hooks/music/midis/types";
import { useRefsAudio } from "~/pages/video/music/_context/init/refs/audio";
import { useRefsProgress } from "~/pages/video/music/_context/init/refs/progress";
import { useRefsSchedule } from "~/pages/video/music/_context/init/refs/schedule";
import { useRefsLayout } from "~/pages/video/music/_context/init/refs/layout";
import { useRefsGrid } from "~/pages/video/music/_context/init/refs/grid";

export type TAudioNodeId = string;

export type TRefRecord<
  T extends HTMLElement
> = Record<string, MutableRefObject<T>>;

export type TUpdateStepsRecord = (
  nextSteps: TMidiValues,
  nextScaleKey: TScaleKey
) => void;

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
};
