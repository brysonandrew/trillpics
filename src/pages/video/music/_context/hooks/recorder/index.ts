import { STEPS_COUNT } from "~/constants/music/steps";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useStepsPerSecond } from "~/hooks/music/time";
import { useTimer } from "~/hooks/use-timer";
import { useRecorderListeners } from "~/pages/video/music/_context/hooks/recorder/listeners";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useGridCellHandler } from "~/pages/video/music/_context/init/hooks/grid-cell-color";

export const useMusicRecorder = () => {
  const {
    recorder,
    saveProgress,
    audio,
  } = useMusicInitContext();
  const playBeats = usePlayBeats();
  const playMidis = usePlayMidis();

  const stepsPerSecond =
    useStepsPerSecond();
  const seconds =
    stepsPerSecond * STEPS_COUNT;
  useRecorderListeners();

  const handleGridCell =
    useGridCellHandler();

  const handleDone = () => {
    saveProgress.set(0);
    audio.currentStep = -1;
    handleGridCell();
  };

  const [
    isRecordingCooldown,
    startCooldownTimer,
    stopCooldownTimer,
  ] = useTimer(
    seconds * 1000,
    handleDone
  );

  const handleStop = () => {
    if (
      recorder.state === "recording"
    ) {
      playBeats.stop();
      playMidis.stop();
      recorder.stop();
      stopCooldownTimer();
      startCooldownTimer();
    }
  };

  const [
    isRecording,
    startTimer,
    stopTimer,
  ] = useTimer(
    seconds * 1000,
    handleStop
  );

  const resetTimers = () => {
    stopCooldownTimer();
    stopTimer();
  };

  const handleStart = async () => {
    if (
      recorder.state === "recording"
    ) {
      recorder.stop();
    } else {
      await playBeats.play();
      await playMidis.play();
      recorder.start();

      resetTimers();
      startTimer();
    }
  };

  return {
    isRecording,
    isRecordingCooldown,
    seconds,
    handleStart,
    handleStop,
  } as const;
};
