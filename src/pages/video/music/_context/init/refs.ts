import { useMemo } from "react";
import { useMusicInitProgress } from "~/pages/video/music/_context/init/progress";
import {
  TBufferSourceRecord,
  TPartialStepsScaleRecord,
  TProgressStepRecord,
} from "~/pages/video/music/_context/init/types";
export const useMusicInitProviderRefs =
  () => {
    const progress =
      useMusicInitProgress();

    const refs = useMemo(() => {
      const context =
        new AudioContext();

      // const create = (

      // ) => {
      //   return {
      //     create,
      //     isStarted: false,
      //     node: new OscillatorNode(
      //       context,
      //       options
      //     ),
      //   };
      // };\

      const options = {
        type: "sawtooth" as const,
        frequency: 120,
      };
      const oscillator = {
        isStarted: false,
        node: new OscillatorNode(
          context,
          options
        ),
      };

      const delay =
        context.createDelay();
      delay.delayTime.value = 0.01;

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
      const stepsScaleRecord: TPartialStepsScaleRecord =
        {};

      const progressStep: TProgressStepRecord =
        {
          recorder: -1,
          midis: -1,
          beats: -1,
        };

      return {
        loopCount: 0,
        loopsRemainder: 0,
        beatsMaster,
        context,
        master,
        delay,
        oscillator,
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
        stepsScaleRecord,
      };
    }, []);

    return refs;
  };
