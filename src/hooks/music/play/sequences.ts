import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useContextMusicInit } from "~/pages/video/music/_context/init";

export const usePlaySequences = () => {
  const { context } =
    useContextMusicInit();
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
