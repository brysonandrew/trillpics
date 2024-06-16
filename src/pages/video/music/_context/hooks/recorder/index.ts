import { STEPS_COUNT } from "~/constants/music/timing";
import { useMusicPlay } from "~/hooks/music/play";
import { useStepsPerSecond } from "~/hooks/music/time";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useTimer } from "~/hooks/use-timer";
import { useRecorderListeners } from "~/pages/video/music/_context/hooks/recorder/listeners";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const useMusicRecorder = () => {
  const {
    recorder,
    audio,
  } = useMusicInitContext();
  const musicPlay = useMusicPlay();
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
  const loopsRemainder = Math.floor(
    videoSeconds % audioSeconds
  );

  audio.loopCount = loopCount;
  audio.loopsRemainder = loopsRemainder;

    // saveProgress.set(0);
    // audio.progressStep = -1;
    // handleGridCell();

  // const [
  //   isRecordingCooldown,
  //   startCooldownTimer,
  //   stopCooldownTimer,
  // ] = useTimer(
  //   videoSeconds * 1000,
  //   handleDone
  // );

  // const handleStop = () => {
  //   if (
  //     recorder.state === "recording"
  //   ) {
  //     musicPlay.stop();
  //     recorder.stop();
  //     stopCooldownTimer();
  //     startCooldownTimer();
  //   }
  // };

  // const [
  //   isRecording,
  //   startTimer,
  //   stopTimer,
  // ] = useTimer(
  //   videoSeconds * 1000,
  //   handleStop
  // );
  // const resetTimers = () => {
  //   stopCooldownTimer();
  //   stopTimer();
  // };
  const handleStop = () => {
    musicPlay.stop();
    recorder.stop();
  }
  // const [
  //   isRecording,
  //   start,
  //   stop,
  // ] = useTimer();
  const handleStart = async () => {
    if (
      recorder.state === "recording"
    ) {
      handleStop();
    } else {
      recorder.start();
      await musicPlay.play();
      // resetTimers();
      //startTimer();
    }
  };

  return {

    audioSeconds,
    loopCount,
    loopsRemainder,
    videoSeconds,
    handleStart,
    ...musicPlay,

  } as const;
};
