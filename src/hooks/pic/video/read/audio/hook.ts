import { useSearchParams } from "react-router-dom";
import { resolveVideoReadAudio } from "~/hooks/pic/video/read/audio";

export const useVideoReadAudio = () => {
  const [searchParams] =
    useSearchParams();
  const audio = resolveVideoReadAudio(
    searchParams
  );

  return audio;
};
