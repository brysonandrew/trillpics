import { useContextMusicReady } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { usePlaySchedule } from "~/hooks/music/play/schedule";

export const usePlayBeats = () => {
  const { beats: lookup } =
    useContextMusicReady();


  const result = usePlaySchedule({
    key: "beats",
    keys: BEATS_KEYS,
    lookup,
  });

  return result;
};
