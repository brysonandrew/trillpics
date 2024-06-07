import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";
import { THandlerConfig } from "~/hooks/sound/types";
import { useSoundContext } from "~/shell/global/sound";

export const useKick = () => {
  const { context, master } = useSoundContext();
  const handleSample = useBufferFromSrcHandler(context);

  const play = async ({ startTime, volume }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain:volume ?? 0.1 });

    const sampleBuffer: AudioBuffer = await handleSample(
      "/sounds/kicks/saev.wav",
    );

    const source = context.createBufferSource();
    source.buffer = sampleBuffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start(startTime);
  };

  return play;
};
