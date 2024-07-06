import { useMemo } from "react";
import {
  TGainCreate,
  TGainRecycle,
  TGainRef,
  TGainRefs,
  TGains,
} from "~/pages/video/music/_context/refs/audio/gains/types";

const key = 'gain'
export const useMusicInitRefsGains =
  () => {
    const gains = useMemo(() => {
      const init = (
        context: AudioContext
      ): TGains => {
        const create: TGainCreate = (
          options?: GainOptions
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

        const midis = {
          preamp: create({
            gain: 0.4,
          }),
          master: create({
            gain: 0.4,
          }),
        };

        const beats = {
          preamp: create({
            gain: 0.4,
          }),
          master: create({
            gain: 0.12,
          }),
        };
        const refs: TGainRefs = {};
        const connect = (
          output: AudioNode
        ) => {
          const gain: TGainRef = {
            node: create(),
            output,
          };

          return gain;
        };

        return {
          key,
          create,
          connect,
          beats,
          master,
          midis,
          refs,
          recycle,
        };
      };

      return init;
    }, []);

    return gains;
  };
