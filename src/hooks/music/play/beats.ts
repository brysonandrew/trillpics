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
options:    {rate: 0.75}
  });


  return result;
};
