import { MIDIS } from "~/hooks/music/midis/constants";
import { useTrillPicsStore } from "~/store/middleware";
import { usePlaySchedule } from "~/hooks/music/play/schedule";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready";

export const usePlayMidis = () => {
  const { midis: lookup } =
    useMusicReadyContext();
  const { steps, synth } =
    useTrillPicsStore(
      ({ steps, synth }) => ({
        steps,
        synth,
      })
    );
  const result = usePlaySchedule({
    key: "midis",
    keys: MIDIS,
    lookup,
    record: { synth: steps },
    options: synth,
  });

  return result;
};
