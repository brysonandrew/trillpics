import { useMemo } from "react";
import { TDelayRefs } from "~/pages/video/music/_context/init/refs/audio/delays/types";

export const useMusicInitRefsDelays =
  (

  ) => {
    const handler = useMemo(() => {
      const init = (
        context: AudioContext
      ) => {
        const create = (
          options?: DelayOptions
        ) =>
          new DelayNode(
            context,
            options
          );
        const recycle = (
          node: DelayNode
        ): DelayOptions => {
          return {
            delayTime:
              node.delayTime.value,
            maxDelayTime:
              node.delayTime.value,
          };
        };
        const refs: TDelayRefs = {};
        const connect = (node:AudioNode, options?:DelayOptions) => {
          const delay = create(
            options
          );
          delay.connect(node);
          return delay
        };
        return {
          key:'delay',
          create,
          recycle,
          connect,
          refs,
        };
      };

      return init;
    }, []);

    return handler;
  };
