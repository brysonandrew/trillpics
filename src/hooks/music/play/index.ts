import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useTimer } from "~/hooks/use-timer";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const useMusicPlay = () => {
  const { recorder } =
    useMusicInitContext();
  const playBeats = usePlayBeats();
  const playMidis = usePlayMidis();
  const play = async () => {
    await playMidis.play();
    await playBeats.play();
  };
  const stop = () => {
    playMidis.stop();
    playBeats.stop();
    recorder.stop();
  };
  const isPlaying =
    playMidis.isPlaying &&
    playBeats.isPlaying;
  const isCooldown =
    playMidis.isCooldown &&
    playBeats.isCooldown;
  return {
    play,
    stop,
    isPlaying,
    isCooldown,
    isRecording:
      isPlaying &&
      recorder.state === "recording",
  };
};
