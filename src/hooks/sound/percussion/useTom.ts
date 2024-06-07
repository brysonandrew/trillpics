import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";
import { THandlerConfig } from "~/hooks/sound/types";
import { useSoundContext } from "~/shell/global/sound";

export const useTom = () => {
  const { context, master } = useSoundContext();
  const handleSample = useBufferFromSrcHandler(context);

  const play = async ({ startTime }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: 0.4 });

    const sampleBuffer: AudioBuffer = await handleSample(
      "/sounds/toms/ludwig-mahogany-low-tom.wav",
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
