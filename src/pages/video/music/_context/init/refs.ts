import { useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { useMusicInitProgress } from "~/pages/video/music/_context/init/progress";
import {
  TBufferSourceRecord,
  TProgressStepRecord,
  TStepsRecord,
} from "~/pages/video/music/_context/init/types";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/init/constants";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { DEFAULT_SYNTH_OPTIONS } from "~/pages/video/music/synth/constants";
import { DEFAULT_SCALE_OPTIONS } from "~/pages/video/music/synth/scale/constants";
import { DEFAULT_SEQUENCE_OPTIONS } from "~/pages/video/music/synth/sequence/constants";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
export const useMusicInitProviderRefs =
  () => {
    const scrollY = useMotionValue(0);
    const progress =
      useMusicInitProgress();

    const refs = useMemo(() => {
      const context =
        new AudioContext();

      const delay = new DelayNode(
        context,
        { delayTime: 0.01 }
      );

      const filter =
        new BiquadFilterNode(context, {
          type: "lowpass",
          frequency: 500,
        });

      const destination =
        new MediaStreamAudioDestinationNode(
          context
        );
      const master =
        context.createGain();
      master.gain.value = 0.5;

      const midisMaster =
        context.createGain();
      midisMaster.gain.value = 0.5;

      const beatsMaster =
        context.createGain();
      beatsMaster.gain.value = 0.5;

      midisMaster.connect(master);
      beatsMaster.connect(master);
      master.connect(destination);
      master.connect(
        context.destination
      );

      const recorder =
        new MediaRecorder(
          destination.stream
        );
      const chunks: Blob[] = [];

      const arrayBuffer: ArrayBuffer =
        new Float32Array();
      const bufferSourceRecord: TBufferSourceRecord =
        {
          kick: [],
          snare: [],
          hihat: [],
          tom: [],
        };
      const bufferRecord = {};

      const steps = resolveMidiSteps({
        ...DEFAULT_SEQUENCE_OPTIONS,
        ...DEFAULT_SCALE_OPTIONS,
      });

      const stepsRecord: TStepsRecord =
        {
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
          presetKey:'disco'
        };

      const progressStep: TProgressStepRecord =
        {
          track: -1,
          midis: -1,
          beats: -1,
        };
      const scroll = {
        current: null,
        y: scrollY,
        modes: PAGE_SCROLL_MODES,
        modeIndex: 0,
      };
      return {
        loopCount: 0,
        loopsRemainder: 0,
        beatsMaster,
        context,
        master,
        delay,
        filter,
        destination,
        recorder,
        chunks,
        arrayBuffer,
        progress,
        bufferSourceRecord,
        midisMaster,
        bufferRecord,
        gridCellsRecord: {},
        progressStep,
        stepsRecord,
        scroll,
      };
    }, []);

    return refs;
  };
