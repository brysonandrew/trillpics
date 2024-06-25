import { useMemo } from "react";

export const useMusicInitRefsDelays =
  () => {
    const handler = useMemo(() => {
      const init = (
        context: AudioContext
      ) => {
        const create = (
          options: DelayOptions
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
        const delay = create({
          delayTime: 0.1,
        });
        return {
          create,
          delay,
          recycle,
        };
      };
      return init;
    }, []);

    return handler;
  };
