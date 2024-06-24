import { MIDIS } from "~/hooks/music/midis/constants";
import { useTrillPicsStore } from "~/store/middleware";
import { usePlaySchedule } from "~/hooks/music/play/schedule";
import { useContextMusicReady } from "~/pages/video/music/_context/ready";
import { useContextMusicInit } from "~/pages/video/music/_context/init";

export const usePlayMidis = () => {
  const { midis: lookup } =
    useContextMusicReady();
  const { steps, synth } =
    useTrillPicsStore(
      ({ steps, synth }) => ({
        steps,
        synth,
      })
    );
  const { stepsRecord } =
    useContextMusicInit();

  const result = usePlaySchedule({
    key: "midis",
    keys: MIDIS,
    lookup,
    record: {
      synth:
        stepsRecord.steps ?? steps,
    },
    options: {
      ...synth,
    },
  });

  return result;
};
