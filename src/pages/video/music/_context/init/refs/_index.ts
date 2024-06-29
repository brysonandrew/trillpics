import { useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { useRefsProgress } from "~/pages/video/music/_context/init/refs/progress";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/init/constants";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { DEFAULT_SYNTH_OPTIONS } from "~/pages/video/music/synth/constants";
import { DEFAULT_SCALE_OPTIONS } from "~/pages/video/music/synth/composition/scale/constants";
import { DEFAULT_SEQUENCE_OPTIONS } from "~/pages/video/music/synth/composition/sequence/constants";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";

// export const useMusicInitRefs = () => {


//   const refs = useMemo(() => {
//     const context = new AudioContext();

//     const delay = new DelayNode(
//       context,
//       { delayTime: 0.01 }
//     );

//     const filter = new BiquadFilterNode(
//       context,
//       {
//         type: "lowpass",
//         frequency: 500,
//       }
//     );

//     const destination =
//       new MediaStreamAudioDestinationNode(
//         context
//       );
//     const master = context.createGain();
//     master.gain.value = 0.5;

//     const midis =
//       context.createGain();
//     midis.gain.value = 0.5;

//     const beats =
//       context.createGain();
//     beats.gain.value = 0.5;

//     midis.connect(master);
//     beats.connect(master);
//     master.connect(destination);
//     master.connect(context.destination);

//     const recorder = new MediaRecorder(
//       destination.stream
//     );
//     const chunks: Blob[] = [];

//     const arrayBuffer: ArrayBuffer =
//       new Float32Array();
//     const bufferSourceRecord: TBufferSourceRecord =
//       {
//         kick: [],
//         snare: [],
//         hihat: [],
//         tom: [],
//       };
//     const bufferRecord = {};

//     const steps = resolveMidiSteps({
//       ...DEFAULT_SEQUENCE_OPTIONS,
//       ...DEFAULT_SCALE_OPTIONS,
//     });

//     const schedule.record: TStepsRecord = {
//       steps,
//       sequence: {
//         ...DEFAULT_SEQUENCE_OPTIONS,
//       },
//       scale: {
//         ...DEFAULT_SCALE_OPTIONS,
//       },
//       synth: {
//         ...DEFAULT_SYNTH_OPTIONS,
//       },
//       presets: BEATS_PRESETS,
//       presetKey: "disco",
//     };

//     const progressStep: TProgressStepRecord =
//       {
//         track: -1,
//         midis: -1,
//         beats: -1,
//       };
//     const scroll = {
//       current: null,
//       y: scrollY,
//       modes: PAGE_SCROLL_MODES,
//       modeIndex: 0,
//     };
//     return {
//       loopCount: 0,
//       loopsRemainder: 0,
//       beats,
//       context,
//       master,
//       delay,
//       filter,
//       destination,
//       recorder,
//       chunks,
//       arrayBuffer,
//       progress,
//       bufferSourceRecord,
//       midis,
//       bufferRecord,
//       grid.record: {},
//       progressStep,
//       schedule.record,
//       scroll,
//     };
//   }, []);
//   // midis.connect(master);
//   // beats.connect(master);
//   // master.connect(destination);
//   // master.connect(context.destination);
//   return { ...refs };
// };
