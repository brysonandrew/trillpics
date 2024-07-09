import {
  QUERY_PARAM_KEYS,
  AUDIO_SRC_KEY,
  AUDIO_START_PARAM_KEY,
} from "~/hooks/pic/constants";
import { isNull } from "~/utils/validation/is/null";

export const resolveVideoReadAudio = (
  searchParams: URLSearchParams
) => {
  const src = searchParams.get(
    QUERY_PARAM_KEYS[AUDIO_SRC_KEY]
  );
  const start = searchParams.get(
    QUERY_PARAM_KEYS[
      AUDIO_START_PARAM_KEY
    ]
  );
  const audio =
    !isNull(src) && !isNull(start)
      ? {
          src,
          start: Number(start),
        }
      : null;

  return audio;
};
