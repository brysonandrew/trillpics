import {  TMidiValue,  TPlayMidisOptions,} from "~/hooks/music/midis/types";
import { useSchedulingStart } from "~/hooks/music/midis/scheduling/start";
import { bitcrusher } from "~/pages/video/music/synth/nodes/bitcrusher/init";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import {  hzToMidi,  midiToHz,} from "~/utils/music";

export const useArpeggio = () => {
  const { start, stop } =
    useSchedulingStart();
  const { audio, schedule } =
    useMusicRefs();
  const {
    gains,
    delays,
    oscillators,
    context,
  } = audio;
  // const endoscillator = (
  //   endTime?: number
  // ) => {
  //   audio.graph.ref.arpeggio.node.stop(endTime);
  //   const prevNode = audio.graph.ref.arpeggio.node;
  //   const nextOptions: audio.graph.ref.arpeggioOptions =
  //     audio.graph.ref.arpeggio.recycle(prevNode);
  //   audio.graph.ref.arpeggio.node = audio.graph.ref.arpeggio.create(
  //     nextOptions
  //   );
  //   audio.graph.ref.arpeggio.isStarted = false;
  // };

  const handleStop = () => {
    stop();
  // audio.graph.ref.arpeggio.end();
  };

//   const handler = (
//     startTime: number,
//     stepMidi: TMidiValue,
//     options: TPlayMidisOptions
//   ) => {
//     if (
//       schedule.record.synth.source ===
//       "oscillator"
//     ) {
//       audio.graph.ref.arpeggio.node.connect(
//         gains.midis.preamp
//       );

//       if (!audio.graph.ref.arpeggio.isStarted) {
//         audio.graph.ref.arpeggio.isStarted = true;
//         audio.graph.ref.arpeggio.node.start(
//           startTime
//         );
//       }
//       const setFrequency = (
//         deltaMidi: number
//       ) => {
//         const currHz =
//           audio.graph.ref.arpeggio.node.frequency
//             .value;
//         const currMidi =
//           hzToMidi(currHz);
//         const nextHz = midiToHz(
//           currMidi + deltaMidi
//         );
//         audio.graph.ref.arpeggio.node.frequency.value =
//           nextHz;
//       };
//       start(
//         startTime,
//         stepMidi,
//         options,
//         setFrequency,
//         audio.graph.ref.arpeggio.end
//       );
//     } else {
//       const disconnect = (
//         end?: number
//       ) => {
//         console.log("STOP");
//         if (
//           audio.worklets[
//             "karplus-strong"
//           ]
//         ) {
//           audio.worklets[
//             "karplus-strong"
//           ].disconnect(
//             gains.midis.preamp
//           );
//           if (
//             audio.worklets[
//               "white-noise"
//             ]
//           ) {
//             audio.worklets[
//               "white-noise"
//             ].disconnect(
//               audio.worklets[
//                 "karplus-strong"
//               ]
//             );
//           }
//         }
//       };

//       let prevHz = 100;
//       const setFrequency = (
//         deltaMidi: number,
//         stepDuration: number,
//         intervalDuration: number = stepDuration
//       ) => {
//         if (
//           !audio.worklets["white-noise"]
//         ) {
//           audio.worklets[
//             "white-noise"
//           ] = new AudioWorkletNode(
//             context,
//             "white-noise"
//           );
//         }

//         if (
//           !audio.worklets[
//             "karplus-strong"
//           ]
//         ) {
//           audio.worklets[
//             "karplus-strong"
//           ] = new AudioWorkletNode(
//             context,
//             "karplus-strong"
//           );
//         }
//         audio.worklets[
//           "white-noise"
//         ].parameters.get(
//           "gain"
//         ).value = 0.99;
//         audio.worklets[
//           "white-noise"
//         ].port.postMessage(
//           startTime
//         );
// console.log(context.sampleRate)
//         if (
//           !audio.worklets[
//             "karplus-strong"
//           ]
//         ) {
//           audio.worklets[
//             "karplus-strong"
//           ] = new AudioWorkletNode(
//             context,
//             "karplus-strong"
//           );
//         }

//         audio.worklets[
//           "white-noise"
//         ].connect(
//           audio.worklets[
//             "karplus-strong"
//           ]
//         );
//         audio.worklets[
//           "karplus-strong"
//         ].connect(gains.midis.preamp);
//         //  audio.worklets[
//         //     "karplus-strong"
//         //   ].parameters.get(
//         //     "delayTime"
//         //   ).value = prevHz;
//         const currMidi =
//           hzToMidi(prevHz);
//         const nextHz = midiToHz(
//           currMidi + deltaMidi
//         )+261.63/2;
//         const delayOffset = 128 / context.sampleRate;
//         const delayTime = 1000 / nextHz - delayOffset;
//         const end =
//           startTime+stepDuration;
//           //  +
//           // intervalDuration;
//           // const end2 =
//           // startTime +
//           // intervalDuration+stepDuration;
//           // console.log(stepDuration,intervalDuration)
//         // audio.worklets[
//         //   "karplus-strong"
//         // ].parameters.get(
//         //   "delayTime"
//         // ).value = prevHz;
//         // audio.worklets[
//         //   "karplus-strong"
//         // ].parameters
//         //   .get("delayTime")
//         //   .value = pdelayTime
//         audio.worklets[
//           "karplus-strong"
//         ].parameters
//           .get("delayTime")
//           .linearRampToValueAtTime(
//             delayTime,
//             startTime
//           );
//         prevHz = nextHz;
//         // disconnect(end)
//       };
//       start(
//         startTime,
//         stepMidi,
//         options,
//         setFrequency,
//         disconnect
//       );
//     }

//     if (
//       !schedule.record.synth.bitcrusher
//     ) {
//       const node = bitcrusher(
//         context,
//         schedule.record.synth.bitcrusher
//       );
//       gains.midis.preamp.connect(node);
//       node.connect(
//         // filters.filter
//         gains.midis.master
//       );
//     } else {
//       // gains.midis.preamp.connect(
//         // filters.filter
//         // gains.midis.master
//       // );
//     }

//     // filters.filter.connect(
//     //   delays.delay
//     // );

//     // delays.delay.connect(
//     //   gains.midis.master
//     // );
//   };
  return {
    // play: handler,
    stop: handleStop,
  };
};
