import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const useMusicPlay = () => {
  const {
    audio: {
      save: { recorder },
    },
  } = useMusicRefs();
  const playBeats = usePlayBeats();
  const playNodes = usePlayMidis();
  const isPlaying =
    playNodes.isPlaying &&
    playBeats.isPlaying;
  const isCooldown =
    playNodes.isCooldown &&
    playBeats.isCooldown;
  const stop = () => {
    playNodes.stop();
    playBeats.stop();
    recorder.stop();
  };
  const play = async () => {
    if (isPlaying) {
      stop();
    }
    await playNodes.play();
    await playBeats.play();
  };

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
