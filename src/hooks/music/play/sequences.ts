import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useMusicInitContext } from "~/pages/video/music/_context/init";

export const usePlaySequences = () => {
  const { context } =
    useMusicInitContext();
  const playBeats = usePlayBeats();
  const playMidis = usePlayMidis();

  const play = async () => {
    await context.resume();
    playBeats.play();
    playMidis.play();
  };
  const stop = async () => {
    await context.resume();
    playBeats.stop();
    playMidis.stop();
  };

  return {
    play,
    stop,
    isPlaying: {
      beats: playBeats.isPlaying,
      midis: playMidis.isPlaying,
    },
  };
};
