import { usePlaySchedule } from "~/hooks/music/play/schedule";
import { useContextMusicReady } from "~/pages/video/music/_context/ready";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { MIDIS_KEYS } from "~/hooks/music/midis/constants";

export const usePlayMidis = () => {
  const { midis: lookup } =
    useContextMusicReady();
  const { schedule } = useMusicRefs();

  const result = usePlaySchedule({
    key: "midis",
    keys: MIDIS_KEYS,
    lookup,
    options: {
      ...schedule.record.synth,
    },
  });

  return result;
};
