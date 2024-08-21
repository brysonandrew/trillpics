import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { useTimer } from "~/hooks/use-timer";
import { useGridCellHandler } from "~/pages/video/music/_context/init/hooks/grid-cell-color";

type THandler = () => void;
type TConfig = {
  stop: THandler;
};
export const usePlaybackSchedule = (
  config: TConfig
) => {
  const handleGridCell =
    useGridCellHandler();
  const audioSeconds =
    useAudioSeconds();

  const handleDone = () => {
    handleGridCell();
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
  };
};
