import { useMemo } from "react";
import {
  TAudioBufferRecord,
  TBufferSourceRecord,
} from "~/pages/video/music/_context/init/refs/audio/drums/types";

export const useMusicInitRefsDrums =
  () => {
    const handler = useMemo(() => {
      const init = () => {
        const bufferSourceRecord: TBufferSourceRecord =
          {
            kick: [],
            snare: [],
            hihat: [],
            tom: [],
          };
        const bufferRecord: TAudioBufferRecord =
          {};

        return {
          bufferSourceRecord,
          bufferRecord,
        };
      };
      return init;
    }, []);

    return handler;
  };
