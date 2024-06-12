import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { useSoundContext } from "~/shell/global/sound";

export const usePlaySequences = () => {
  const { context } = useSoundContext();
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

  return { play, stop };
};
