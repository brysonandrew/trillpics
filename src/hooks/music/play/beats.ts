import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { useTrillPicsStore } from "~/store/middleware";
import { usePlaySchedule } from "~/hooks/music/play/schedule";

export const usePlayBeats = () => {
  const { beats: lookup } =
    useMusicReadyContext();
  const { beatsPresetKey } =
    useTrillPicsStore(
      ({ beatsPresetKey }) => ({
        beatsPresetKey,
      })
    );

  const record =
    BEATS_PRESETS[beatsPresetKey];
  const result = usePlaySchedule({
    key: "beats",
    keys: BEATS_KEYS,
    lookup,
    record,
  });

  return result;
};

// export const _usePlayBeats = () => {
//   const { timeoutRef, endTimeout } =
//     useTimeoutRef();
//   const { context, audio, recorder } =
//     useMusicInitContext();
//   const { beats: lookup } =
//     useMusicReadyContext();
//   const { playingKeys, bpm, set } =
//     useTrillPicsStore(
//       ({
//         playingKeys,
//         bpm,
//         beatsPresetKey,
//         set,
//       }) => ({
//         playingKeys,
//         bpm,
//         beatsPresetKey,
//         set,
//       })
//     );
//   const { loopCount, isRecording } =
//     useMusicRecorderContext();

//   const isPlaying =
//     playingKeys.includes("beats");

//   const handleStopAll = () => {
//     BEATS_KEYS.forEach((beatKey) => {
//       lookup[beatKey].stop();
//     });

//     set((prev: TState) => ({
//       playingKeys:
//         prev.playingKeys.filter(
//           (v) => v !== "beats"
//         ),
//     }));
//   };

//   const play = async () => {
//     if (isPlaying) {
//       handleStopAll();
//     }
//     set((prev: TState) => ({
//       playingKeys: [
//         ...prev.playingKeys,
//         "beats",
//       ],
//     }));

//     await context.resume();
//     let elapsed = 0;
//     const sps = resolveStepsPerSecond(
//       bpm,
//       STEPS_COUNT
//     );
//     const remainderSteps = Math.floor(
//       audio.loopsRemainder / sps
//     );

//     [
//       ...Array(
//         recorder.state === "recording"
//           ? audio.loopCount + 1
//           : 1
//       ),
//     ].forEach((_, loopIndex) => {
//       BEATS_KEYS.forEach((beatKey) => {
//         const presets =
//           BEATS_PRESETS[beatsPresetKey];
//         const steps =
//           presets[beatKey] ?? [];
//         steps.forEach(
//           (
//             step,
//             stepIndex,
//             { length: stepCount }
//           ) => {
//             if (
//               loopIndex ===
//               audio.loopCount
//             ) {
//               if (
//                 remainderSteps ===
//                 stepIndex
//               ) {
//                 timeoutRef.current =
//                   setTimeout(() => {
//                     handleStopAll();
//                   }, elapsed * 1000);
//                 return;
//               }
//             }
//             if (step) {
//               const sps =
//                 resolveStepsPerSecond(
//                   bpm,
//                   stepCount
//                 );
//               const currElapsed =
//                 stepIndex * sps;

//               const loopElapsed =
//                 loopIndex *
//                 sps *
//                 stepCount;
//               elapsed =
//                 currElapsed +
//                 loopElapsed;
//               lookup[beatKey].play(
//                 context.currentTime +
//                   elapsed,
//                 {
//                   volume:
//                     stepIndex % 4 === 0
//                       ? 1.4
//                       : stepIndex %
//                           2 ===
//                         0
//                       ? 1.2
//                       : 1,
//                 }
//               );
//             }
//           }
//         );
//       });
//     });
//     timeoutRef.current = setTimeout(
//       () => {
//         handleStopAll();
//       },
//       elapsed * 1000
//     );
//   };

//   return {
//     play,
//     stop: handleStopAll,
//     isPlaying,
//   };
// };
