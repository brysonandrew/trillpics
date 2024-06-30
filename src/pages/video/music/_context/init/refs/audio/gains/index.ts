import { useMemo } from "react";
import {
  TGainCreate,
  TGainRecycle,
  TGains,
} from "~/pages/video/music/_context/init/refs/audio/gains/types";

export const useMusicInitRefsGains =
  () => {
    const gains = useMemo(() => {
      const init = (
        context: AudioContext
      ): TGains => {
        const create: TGainCreate = (
          options
        ) =>
          new GainNode(
            context,
            options
          );

        const recycle: TGainRecycle = (
          node
        ) => {
          return {
            gain: node.gain.value,
          };
        };

        const master = create({
          gain: 0.5,
        });

        const midis = create({
          gain: 0.4,
        });

        const beats = create({
          gain: 0.18,
        });

        return {
          create,
          beats,
          master,
          midis,
          recycle,
        };
      };

      return init;
    }, []);

    return gains;
  };
