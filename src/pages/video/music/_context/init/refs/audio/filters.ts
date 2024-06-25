import { useMemo } from "react";

export const useMusicInitRefsFilters =
  () => {
    const handler = useMemo(() => {
      const init = (
        context: AudioContext
      ) => {
        const create = (
          options: BiquadFilterOptions
        ) =>
          new BiquadFilterNode(
            context,
            options
          );

        const recycle = (
          node: BiquadFilterNode
        ): BiquadFilterOptions => {
          return {
            frequency:
              node.frequency.value,
            detune: node.detune.value,
            Q: node.Q.value,
            type: node.type,
          };
        };
        const filter = create({
          type: "lowpass",
          frequency: 500,
        });
        return {
          create,
          filter,
          recycle,
        };
      };
      return init;
    }, []);

    return handler;
  };
