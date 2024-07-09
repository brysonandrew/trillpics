import { useMemo } from "react";
import { resolveMidiSteps } from "~/hooks/music/midis/steps";
import {
  SCALE_RECORD,
  TScaleKey,
} from "~/constants/scales";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { TMidiValues } from "~/hooks/music/midis/types";
import { handleRescale } from "~/hooks/music/midis/scale/rescale";
import { DEFAULT_SYNTH_OPTIONS } from "~/pages/video/music/_context/refs/audio/constants";
import { DEFAULT_SCALE_OPTIONS } from "~/pages/video/music/synth/composition/scale/constants";
import { TScalePattern } from "~/pages/video/music/synth/composition/scale/types";
import { DEFAULT_SEQUENCE_OPTIONS } from "~/pages/video/music/synth/composition/sequence/constants";
import { TProgressStepRecord } from "~/pages/video/music/_context/refs/progress/types";
import {
  TScheduleOptions,
  TStepsLoookup,
} from "~/pages/video/music/_context/refs/schedule/types";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";

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
      playingKeys: [],
      sequence: {
        ...DEFAULT_SEQUENCE_OPTIONS,
      },
      scale: {
        ...DEFAULT_SCALE_OPTIONS,
      },
      synth: {
        mode:"continuous",//"isolated", //
        source: OSCILLATOR_KEY,// "oscillator",
        bitcrusher: {frequency:440,bits:64},
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
