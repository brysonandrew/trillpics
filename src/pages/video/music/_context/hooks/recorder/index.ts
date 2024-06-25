import { STEPS_COUNT } from "~/constants/music/timing";
import { useMusicPlay } from "~/hooks/music/play";
import { useStepsPerSecond } from "~/hooks/music/time/steps-per-second";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useRecorderListeners } from "~/pages/video/music/_context/hooks/recorder/listeners";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const useMusicRecorder = () => {
  const { schedule, audio } =
    useMusicRefs();
  const {
    record: { steps },
  } = schedule;
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

  schedule.loopCount = loopCount;
  schedule.loopsRemainder =
    loopsRemainder;

  const handleStop = () => {
    musicPlay.stop();
    audio.save.recorder.stop();
  };

  const handleStart = async () => {
    if (
      audio.save.recorder.state ===
      "recording"
    ) {
      handleStop();
    } else {
      audio.save.recorder.start();
      await musicPlay.play();
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
