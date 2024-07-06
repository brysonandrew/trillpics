import { useMemo } from "react";
import { TPlayBeatsOptions } from "~/hooks/music/beats/types";
import {
  TAudioBufferRecord,
  TBufferSourceRecord,
} from "~/pages/video/music/_context/refs/audio/drums/types";

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

          const options: TPlayBeatsOptions =
          {playbackRate:1};

        return {
          bufferSourceRecord,
          bufferRecord,
          options
        };
      };
      return init;
    }, []);

    return handler;
  };
