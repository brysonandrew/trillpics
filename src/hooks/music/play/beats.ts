import { useContextMusicReady } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { useTrillPicsStore } from "~/store/middleware";
import { usePlaySchedule } from "~/hooks/music/play/schedule";

export const usePlayBeats = () => {
  const { beats: lookup } =
    useContextMusicReady();
  const { beats} =
    useTrillPicsStore(
      ({ beats}) => ({
        beats,
      })
    );

  const record =
    BEATS_PRESETS[beats.presetKey];
  const result = usePlaySchedule({
    key: "beats",
    keys: BEATS_KEYS,
    lookup,
    record,
    options: { rate: 1 },
  });

  return result;
};
