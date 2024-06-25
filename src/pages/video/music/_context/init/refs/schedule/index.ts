import { useMemo } from "react";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import {
  SCALE_RECORD,
  TScaleKey,
} from "~/constants/scales";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { TMidiValues } from "~/hooks/music/midis/types";
import { handleRescale } from "~/hooks/scale/rescale";
import { DEFAULT_SYNTH_OPTIONS } from "~/pages/video/music/synth/constants";
import { DEFAULT_SCALE_OPTIONS } from "~/pages/video/music/synth/scale/constants";
import { TScalePattern } from "~/pages/video/music/synth/scale/types";
import { DEFAULT_SEQUENCE_OPTIONS } from "~/pages/video/music/synth/sequence/constants";
import { TProgressStepRecord } from "~/pages/video/music/_context/init/refs/progress/types";
import {
  TScheduleOptions,
  TStepsLoookup,
} from "~/pages/video/music/_context/init/refs/schedule/types";

export const useRefsSchedule = () => {
  const nodes = useMemo(() => {
    const steps = resolveMidiSteps({
      ...DEFAULT_SEQUENCE_OPTIONS,
      ...DEFAULT_SCALE_OPTIONS,
    });

    const record: TScheduleOptions = {
      midi: 44,
      bpm: 80,
      steps,
      sequence: {
        ...DEFAULT_SEQUENCE_OPTIONS,
      },
      scale: {
        ...DEFAULT_SCALE_OPTIONS,
      },
      synth: {
        ...DEFAULT_SYNTH_OPTIONS,
      },
      presets: BEATS_PRESETS,
      presetKey: "disco",
      get preset() {
        return this.presets[
          this.presetKey
        ];
      },
    };

    const stepsLookup: TStepsLoookup =
      {};

    const progressStep: TProgressStepRecord =
      {
        track: -1,
        midis: -1,
        beats: -1,
      };

    const update = {
      steps: (next: TMidiValues) => {
        record.steps = next;
      },
      key: (next: TScaleKey) => {
        record.scale.key = next;
        const scaleSteps =
          SCALE_RECORD[next];
        const currSteps =
          stepsLookup[next];
        const nextSteps = handleRescale(
          currSteps,
          scaleSteps
        );
        record.steps = nextSteps;
        return nextSteps;
      },
      pattern: (
        next: TScalePattern
      ) => {
        record.scale.pattern = next;
      },
      offset: (next: TScalePattern) => {
        record.scale.pattern = next;
      },
      delay: (next: number) => {
        record.sequence.delay = next;
      },
      repeat: (next: number) => {
        record.sequence.repeat = next;
      },
      interval: (next: number) => {
        record.sequence.interval = next;
      },
      duration: (next: number) => {
        record.sequence.duration = next;
      },
    };

    return {
      loopCount: 0,
      loopsRemainder: 0,
      progressStep,
      record,
      scroll,
      update,
    };
  }, []);

  return nodes;
};
