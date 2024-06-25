import { useContextMusicReady } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { usePlaySchedule } from "~/hooks/music/play/schedule";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const usePlayBeats = () => {
  const {
    schedule: {
      record: {
        preset,
        presetKey,
        presets,
      },
    },
  } = useMusicRefs();
  const { beats: lookup } =
    useContextMusicReady();
  // const { beats} =
  //   useTrillPicsStore(
  //     ({ beats}) => ({
  //       beats,
  //     })
  //   );

  const result = usePlaySchedule({
    key: "beats",
    keys: BEATS_KEYS,
    lookup,
    options: { rate: 1 },
  });

  return result;
};
