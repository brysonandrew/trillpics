import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const usePlaySequences = () => {
  const {
    audio: { context },
  } = useMusicRefs();
  const playBeats = usePlayBeats();
  const playNodes = usePlayMidis();

  const play = async () => {
    await context.resume();
    playBeats.play();
    playNodes.play();
  };
  const stop = async () => {
    await context.resume();
    playBeats.stop();
    playNodes.stop();
  };

  return {
    play,
    stop,
    isPlaying: {
      beats: playBeats.isPlaying,
      midis: playNodes.isPlaying,
    },
  };
};
