import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { useTimer } from "~/hooks/use-timer";
import { useTrillPicsStore } from "~/store/middleware";

type THandler = () => void;
type TConfig = {
  stop: THandler;
};
export const usePlaybackSchedule = (
  config: TConfig
) => {

  const audioSeconds =
    useAudioSeconds();
  const handleDone = () => {
    console.log("DONE");
  };
  const [isCooldown, startCooldown] =
    useTimer(
      audioSeconds * 1000,
      handleDone
    );

  const handleStop = () => {
    config.stop();
    startCooldown();
  };
  const [isActive, start] = useTimer(
    audioSeconds * 1000,
    handleStop
  );

  return {
    isCooldown,
    isActive,
    seconds: audioSeconds,
    start,
    //
  };
};
