import { MIDIS } from "~/hooks/music/midis/constants";
import { useTrillPicsStore } from "~/store/middleware";
import { usePlaySchedule } from "~/hooks/music/play/schedule";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready";

export const usePlayMidis = () => {
  const { midis: lookup, beats } =
    useMusicReadyContext();
  const { steps, synth } =
    useTrillPicsStore(
      ({ steps, synth }) => ({
        steps,
        synth,
      })
    );
  // const handleEnd = () => {
  //   lookup.synth.stop();
  //   BEATS_KEYS.forEach((key) => {
  //     beats[key].stop();
  //   });
  // };
  const result = usePlaySchedule({
    key: "midis",
    keys: MIDIS,
    lookup,
    record: { synth: steps },
    options: {
      ...synth,
      // onEnd: handleEnd,
    },
  });

  return result;
};
