import { MIDIS } from "~/hooks/music/midis/constants";
import { usePlaySchedule } from "~/hooks/music/play/schedule";
import { useContextMusicReady } from "~/pages/video/music/_context/ready";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const usePlayMidis = () => {
  const { midis: lookup } =
    useContextMusicReady();
  const { schedule } = useMusicRefs();

  const result = usePlaySchedule({
    key: "midis",
    keys: MIDIS,
    lookup,
    options: {
      ...schedule.record.synth,
    },
  });

  return result;
};
