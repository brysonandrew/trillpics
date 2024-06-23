import { STEPS_COUNT } from "~/constants/music/timing";
import { useMusicPlay } from "~/hooks/music/play";
import { useStepsPerSecond } from "~/hooks/music/time/steps-per-second";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useRecorderListeners } from "~/pages/video/music/_context/hooks/recorder/listeners";
import { useContextMusicInit } from "~/pages/video/music/_context/init";

export const useMusicRecorder = () => {
  const {
    recorder,
    audio,
  } = useContextMusicInit();
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

  const handleStop = () => {
    musicPlay.stop();
    recorder.stop();
  }
  
  const handleStart = async () => {
    if (
      recorder.state === "recording"
    ) {
      handleStop();
    } else {
      recorder.start();
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
