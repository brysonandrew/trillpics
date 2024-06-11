import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { useSoundContext } from "~/shell/global/sound";

export const usePlaySequences = () => {
  const { context } = useSoundContext();
  const playBeats = usePlayBeats();
  const playMidis = usePlayMidis();

  const handler = async () => {
    await context.resume();
    playBeats();
    playMidis.play();
  };

  return handler;
};
