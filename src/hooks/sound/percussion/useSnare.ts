import { THandlerConfig } from "~/hooks/sound/types";
import { useSoundContext } from "~/shell/global/sound";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";

export const useSnare = () => {
  const { context, master } = useSoundContext();
  const handleSample = useBufferFromSrcHandler(context);

  const play = async ({
    startTime,
    version = 7,
    volume,
  }: THandlerConfig & { version?: 2 | 7 | 9 | 11 }) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type: "highpass",
    });
    const gain = new GainNode(context, {
      gain: volume ?? 0.08,
    });

    const sampleBuffer: AudioBuffer = await handleSample(
      `/sounds/snares/saev_${version}.wav`,
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
