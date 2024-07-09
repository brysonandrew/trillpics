export const useBufferFromSrcHandler = (
  context: AudioContext,
) => {
  const handler = async (
    src: string,
  ): Promise<AudioBuffer> => {
    const response = await fetch(src);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = await context.decodeAudioData(
      arrayBuffer,
    );
    return buffer;
  };
  return handler;
};
