import { STEPS_COUNT } from "~/constants/music/steps";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useStepsPerSecond } from "~/hooks/music/time";
import { useTimer } from "~/hooks/use-timer";
import { useRecorderListeners } from "~/pages/video/music/_context/hooks/recorder/listeners";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const useMusicRecorder = () => {
  const { recorder } =
    useMusicInitContext();
  const playBeats = usePlayBeats();
  const playMidis = usePlayMidis();

  const stepsPerSecond =
    useStepsPerSecond();
  const seconds =
    stepsPerSecond * STEPS_COUNT;
  useRecorderListeners();
  const [
    isRecordingCooldown,
    startCooldownTimer,
  ] = useTimer(seconds * 1000);

  const handleStop = () => {
    playBeats.stop();
    playMidis.stop();
    recorder.stop();
    startCooldownTimer();
  };

  const [isRecording, startTimer] =
    useTimer(
      seconds * 1000,
      handleStop
    );

  const handleStart = async () => {
    await playBeats.play();
    await playMidis.play();
    recorder.start();
    startTimer();
  };

  return {
    isRecording,
    isRecordingCooldown,
    seconds,
    handleStart,
    handleStop,
  } as const;
};
