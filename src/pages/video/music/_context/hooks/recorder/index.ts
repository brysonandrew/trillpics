import { STEPS_COUNT } from "~/constants/music/steps";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useStepsPerSecond } from "~/hooks/music/time";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
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
  const videoSeconds =
    usePicVideoReadSeconds();
  const stepsPerSecond =
    useStepsPerSecond();
  const audioSeconds =
    stepsPerSecond * STEPS_COUNT;
  useRecorderListeners();

  const loopCount = Math.floor(
    videoSeconds / audioSeconds
  );
  const loopsRemainder =
  Math.floor(videoSeconds % audioSeconds);

audio.loopCount = loopCount;
audio.loopsRemainder = loopsRemainder;

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
    videoSeconds * 1000,
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
    videoSeconds * 1000,
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
      recorder.start();
      await playBeats.play();
      await playMidis.play();
      resetTimers();
      startTimer();
    }
  };

  return {
    isPlaying: {
      beats: playBeats.isPlaying,
      midis: playMidis.isPlaying,
    },
    isRecording,
    isRecordingCooldown,
    audioSeconds,
    loopCount,
    loopsRemainder,
    videoSeconds,
    handleStart,
    handleStop,
  } as const;
};
